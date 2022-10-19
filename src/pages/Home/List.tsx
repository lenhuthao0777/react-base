import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hook'
import apiService from '../../services/AxiosClient'

function List() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    const { data } = await apiService(dispatch).get('task')
  }
  return <div>List</div>
}

export default List
