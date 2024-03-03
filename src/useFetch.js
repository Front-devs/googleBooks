import React, { useState, useEffect } from 'react'
const apikey = `AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`

const useFetch = (urlParams) => {
  const serachTerms = urlParams || `react`
  const API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${serachTerms}&filter=free-ebooks&key=${apikey}`
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data.items, 'data')

      setData(data.items || data)

      setIsLoading(false)
    } catch (error) {
      setError({ show: true, msg: data.Error })
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}`)
    console.log(urlParams, 'url')
  }, [urlParams])
  return { isLoading, error, data }
}

export default useFetch
