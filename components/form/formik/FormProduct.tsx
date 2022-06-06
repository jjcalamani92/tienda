import * as React from 'react';
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useMutation, useQuery } from '@apollo/client';
import { PRODUCTS } from '../../../src/gql/query';
import { Spinner01 } from '../../Spinner';
import { CREATED_PRODUCT } from '../../../src/gql/mutation';
import axios from 'axios';
import { useRouter } from 'next/router';


const validCategory = ['camisas', 'pantalones', 'chompas', 'sombreros', 'poleras', 'leggins', 'chamarras', 'cortos', '']
const validGender = ['hombre', 'mujer', 'niño', 'unisex']
const validSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

interface MyFormValues {
  name: string;
  brand: string;
  image: string[];
  description: string;
  inStock: number;
  gender: string;
  category: string;
  price: number;
  oldPrice: number;
  tags: string[];
  color: string;
  sizes: string[];
  site: string;
}
// interface MyFormValues {
//   title: string;
//   brand: string;
//   description: string;
//   image: string[];
//   inStock: number;
//   category: string;
//   subCategory: string;
//   price: number;
//   tags: string[];
//   site: string;
//   color: string;
//   sizes: string[];
// }

export const FormProduct: React.FC<{}> = () => {

  // const { loading, error, data } = useQuery(PRODUCTS);
	// if (loading) return <Spinner01 />;
  // console.log(data)

  // const [newProduct] = useMutation(CREATED_PRODUCT)
  const router = useRouter()
  const initialValues: MyFormValues = { name: '', brand: '', category: '', gender: '', price: 22, oldPrice: 0, inStock: 3, image: ["https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105125/piccoletti/products/leggins/item01/LDK-055P_mze9id.jpg",
  "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105159/piccoletti/products/leggins/item01/LDK-055A_agicra.jpg",
  "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105186/piccoletti/products/leggins/item01/LDK-055B_ggrf2o.jpg",
  "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105214/piccoletti/products/leggins/item01/LDK-055C_goauoi.jpg"], description: '¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.', tags: ['chamarras', 'chamarritas'], color:'negro', sizes: ["X", "Y"], site:"62928874b4a0d8cc2439aed1" };
  // const initialValues: MyFormValues = { title: 'chamarra01', brand: 'Adidas', category: 'hombre', subCategory: 'chamarras', price: 22,  inStock: 3, image: ["https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449209/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_1_itzp9p.jpg", "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449218/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_2_fekz16.jpg"], description: '¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.', sizes: ["X", "Y"], site:"62928874b4a0d8cc2439aed1", color:'negro', tags: ['chamarras', 'chamarritas'] };
  const validationSchema = Yup.object({
    name: Yup.string().required('campo obligatorio'),
    brand: Yup.string().required('campo obligatorio'),
    gender: Yup.string().required('campo obligatorio'),
    category: Yup.string().required('campo obligatorio'),
    price: Yup.number().required('campo obligatorio'),
    oldPrice: Yup.number().required('campo obligatorio'),
  })
  return (
    <>
      <div className="max-w-2xl mx-auto pt-10 pb-16 px-1 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 ">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Nuevo Producto</h3>
              <p className="mt-1 text-sm text-gray-600">
                Esta información se mostrará publicamente, en la página de productos.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={ async (values, actions) => {
                console.log({ values, actions });
                // console.log(values)
                // alert(JSON.stringify(values, null, 2));
                // actions.setSubmitting(false);
                // await axios.post('http://localhost:8000/api/wear', values)
                await axios.post('https://cristinadevelopmentp.herokuapp.com/api/wear', values)
                
                router.replace('/admin')


              }}
            >
              {/* {({ errors, touched }) => ( */}
              <Form>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-4">



                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Nombre del Producto
                        </label>
                        <Field id="title" name="name" placeholder="nombre" className="mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1" />
                        <ErrorMessage name="name" render={msg => <div className="text-sm text-red-500">{msg}</div>} />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                          Marca
                        </label>
                        <Field id="brand" name="brand" placeholder="marca" className="mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1" />
                        <ErrorMessage name="brand" render={msg => <div className="text-sm text-red-500">{msg}</div>} />
                      </div>



                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                          Genero
                        </label>
                        <Field as="select" name="gender" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm capitalize"
                        ><option disabled value={''}>--Genero--</option>
                          {
                            validGender.map((data, i) => (
                              <option value={data} className="capitalize" key={i}>{data}</option>
                            ))
                          }
                        </Field>
                        <ErrorMessage name="gender" render={msg => <div className="text-sm text-red-500">{msg}</div>} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                          Categoría
                        </label>
                        <Field as="select" name="category" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm capitalize"
                        ><option disabled value={''}>--Categoría--</option>
                          {
                            validCategory.map((data, i) => (
                              <option value={data} className="capitalize" key={i}>{data}</option>
                            ))
                          }
                        </Field>
                        <ErrorMessage name="category" render={msg => <div className="text-sm text-red-500">{msg}</div>} />
                      </div>

                      

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                          Precio
                        </label>
                        <Field id="price" name="price" placeholder="precio del producto" type='number' className="mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1" />
                        <ErrorMessage name="price" render={msg => <div className="text-sm text-red-500">{msg}</div>} />  

                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="oldPrice" className="block text-sm font-medium text-gray-700">
                          Precio de descuento
                        </label>
                        <Field id="oldPrice" name="oldPrice" placeholder="antes" type='number'  className="mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1" />
                        <ErrorMessage name="oldPrice" render={msg => <div className="text-sm text-red-500">{msg}</div>} />  
                      </div>

                    </div>



                    <div>
                      <label className="block text-sm font-medium text-gray-700">Imagenes del Producto</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                            >
                              <span>Cargar un archivo</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">o arrastrar y soltar</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 5MB</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mt-2 " >
                        {
                          ["https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449209/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_1_itzp9p.jpg", "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449218/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_2_fekz16.jpg"].map((data, i) => (
                            <div key={i} className="relative">
                              <Image
                                src={data}
                                alt="image"
                                height={100}
                                width={100}
                                className="object-center object-cover"
                              />
                              <FontAwesomeIcon
                                className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none absolute bottom-1 right-1"
                                // onClick={() => onDeleteTag(data)}
                                icon={faCircleMinus}
                              />
                            </div>
                          ))
                        }
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Descripción del producto
                      </label>
                      <div className="mt-1">
                        <textarea
                          id='description'
                          name='description'
                          rows={6}
                          className="shadow-sm focus:ring-red-500 focus:border-red-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-1"

                        />
                      </div>


                    </div>

                    <div className="grid grid-cols-6 gap-6">

                      <div className="col-span-6 sm:col-span-3">

                        <div id="checkbox-group" className="contents text-base font-medium text-gray-900">Tallas</div>
                        <div role="group" aria-labelledby="checkbox-group" className="grid grid-cols-2 gap-2 mt-4 ">
                          {
                            validSizes.map((data, i) => (
                              <div className="flex items-center" key={i}>
                                <Field type="checkbox" name="checked" value={data} className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300" />
                                <label htmlFor="sizes" className="ml-3 block text-sm font-medium text-gray-700">
                                  {data}
                                </label>
                              </div>
                            ))
                          }
                        </div>

                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                          Color
                        </label>
                        <Field id="color" name="color" placeholder="color" className="mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1" />
                        <ErrorMessage name="color" render={msg => <div className="text-sm text-red-500">{msg}</div>} />
                      </div>



                    </div>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          Tags
                        </label>
                        <input
                          className="mt-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1"
                          type={"text"}
                        //  value={newTagValue}
                        //  onChange={({ target }) => setNewTagValue(target.value)}
                        //  onKeyUp={({ code }) => code === 'Space' ? onNewTag() : undefined}

                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Presiona [Spacio] para agregar.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2"  >
                      {
                        ['a', 'b'].map((data, i) => (
                          
                            <p key={i} className="flex items-center">{data}
                              <FontAwesomeIcon
                                className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none "
                                //  onClick={() => onDeleteTag(data)}
                                icon={faCircleMinus}
                              />
                            </p>
                          
                        ))
                      }
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-white text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Crear Producto
                    </button>
                  </div>
                </div>
              </Form>
              {/* )} */}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
