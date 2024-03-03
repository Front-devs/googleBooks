import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Books = () => {
  const { data, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='movies'>
      {data?.map((movie, index) => {
        const {
          volumeInfo: {
            imageLinks: { thumbnail },
            title,
          },
        } = movie

        return (
          <article className='movie'>
            <img src={thumbnail} />
            <div className='movie-info'>
              <h4 className='title'>{title}</h4>
              {/* <p>{year}</p> */}
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Books
