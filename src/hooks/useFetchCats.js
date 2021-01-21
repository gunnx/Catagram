import { useState, useEffect } from 'react'
import client from '../api/client'

const useFetchCats = (user, limit = 10) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const response = await client.get('images', { params: { limit, page, sub_id: user } })
        if (!data) {
          setData(response.data)
        } else {
          setData([...data, ...response.data])
        }
        const paginationCount = response?.headers?.['pagination-count'] ?? 0
        setTotal(paginationCount)

        const moreResults = (page + 1) * limit < paginationCount
        setHasMore(moreResults)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [page])

  const fetchMore = () => { setPage(page + 1) }

  return { data, isLoading, isError, total, page, fetchMore, hasMore }
}

export default useFetchCats
