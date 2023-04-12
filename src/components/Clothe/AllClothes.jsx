import React from 'react'
import './style.css'
import Clothes from './Clothes'

const AllClothes = ({ Clothe, addToCart }) => {
  return (
    <>
      <section className='background'>
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EADUQAAIBAwIEAwYEBgMAAAAAAAABAgMEEQUSBhMhMSJBUSNCYXGRoTKBwdEUUpKTseEHFRb/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQQDAgX/xAAgEQEBAAICAgIDAAAAAAAAAAAAAQIRAyESQQQxEyJR/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABD6zqVS1qQoUGlOUdzffHp+pMspJurJtKVq1OhHdVnGEfVsx213SuoOVGWUnh5RU6lSdWbnVnKcvVs8VtTlpNtUr05Yq1E4U4vzfr8l+qOF59d36e/x76WSWvabTv52VS5hCtDo93SOfTPbJJKSayuqONSk5ScpNyk3lt9W38Td0/Wr7Slm2uJKmurpy6x+n7GfH5vf7R1y+P8Ayusgj9C1BappVtepKLqwTlFe7Ls19ckgb5dzbNZroABQAAAAAAAAKTqlw7nUa1SPVRltjj0RdiBu9GauYchewnLEkvc/0cuWWzp6xukLUlyabnVTiox3Pp2WMkHrFG6levnujHEVshz4eGPl5lx1+iqdzCUViMqeMfLp/jBWLzRJV91TT6bc0t0qUV3Xqv2MfPhl9Ro48p9of+Gn/NR/vw/c1LyFXkxcacnCUmty6ptYyvujN+WGXFaJK54Lt+VT3XMW68Uu8svt/Tj6GXDjue9enbLPx1t4/wCMb/daXVhNvNKaqQT9Jd/uvuXkgOGOHoaRTdeslK8qR2yku0F32r6Inz63BMseOTJi5LLlbAAHV4AAAAAAAAD4QnGV9eadoNW5097KqqU4zq8vmcmnKcVOpt89sW3+RXnxGrXS7a7hxLC9sVq1OhUv6tCFKLpNPdFzwoSWffil6d0y62m1t1WylexpRg1Fxl1b8kbFpa0rWlspLv3fmyhcS8S39vqd9G11JUKlKFGek2MKUJx1XdFN+Jpt9W4+Brbjc+jJxS1D/wBrWt/+2uv4OFirpWmyjs3SlKOM7N2FjPfOfPHQnh3tfL0ycS8MU9RUrmy20rp/i8o1Pn6P4k/QpQo0KdGPSNOKil8EjmdvxXxBPQqdzXqqhVfCte/hUXLnza0VTxVxt8ONz8Pbr8DZ4h4m1vTbvUp0q26yjRtKcZRpxcratUw9z6dYy6p5zh7cd2THgky8p7LyXWq6SDn1/wARajQ4rnayva0JxvoUKOmUqFN82g1H2r3eOSy5Nyi8R2vKZ0Fdj1ZpJdgAIoAAAAAAAAY67qKHsVFyyukvuZABqSqXS5m2lF4fh69+/wAfl9z1GVxsrb4RUlJ8tJ/iXlk2cIBNNSU7rltxhHdti0sefn5n3fdb37OG3dFJ564942gDQAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=' />
              <h2>Clothing</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className='fa fa-caret-right'></i>
            </div>
          </div>
          <Clothes Clothe={Clothe} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default AllClothes