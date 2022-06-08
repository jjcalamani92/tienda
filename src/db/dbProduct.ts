import { dbE } from '.';
import { IProduct } from '../interfaces';
import Paint from './paint.schema';



export const getProductBySlug = async( slug: string ): Promise<IProduct | null> => {

    await dbE.connect();
    const product = await Paint.findOne({ slug }).lean();
    await dbE.disconnect();

    if ( !product ) {
        return null;
    }

    return JSON.parse( JSON.stringify( product ) );
}

interface ProductSlug {
    slug: string;
}
export const getAllProductSlugs = async(): Promise<ProductSlug[]>  => {


    await dbE.connect();
    const slugs = await Paint.find().select('slug -_id').lean();
    await dbE.disconnect();

    return slugs;
}

export const getProductsByTerm = async ( term:string): Promise<IProduct[]> => {
    
    term = term.toString().toLowerCase();

    await dbE.connect();
    const products = await Paint.find({
        $text: { $search: term }
    })
    .select('title images price inStock slug -_id')
    .lean();

    await dbE.disconnect();

    return products;
}


export const getAllProducts = async(): Promise<IProduct[]> => {

    await dbE.connect();
    const products = await Paint.find().lean();
    await dbE.disconnect();


    return JSON.parse( JSON.stringify( products ) );
}

