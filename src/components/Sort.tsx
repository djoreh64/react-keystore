import React, { useState } from 'react';
import { setSort, setSortIcon } from '../redux/slices/filterSlice.ts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store.ts';

type SortItem = {
  name: string,
  sortProperty: string
}

const sortList: SortItem[] = [
  {name: 'рейтингу', sortProperty: "rating"},
  {name: 'цене', sortProperty: "price"}, 
  {name: 'алфавиту', sortProperty: "name"}
]

const Sort: React.FC = () => {
  const dispatch = useDispatch()
  const sortType = useSelector((state: RootState) => state.filter.sort)
  const sortIcon = useSelector((state: RootState) => state.filter.sortIcon)
  const [activeSort, setActiveSort] = useState(false)
  const sortRef = React.useRef<HTMLDivElement>(null)

  const onClickListItem = (i: SortItem) => {
    dispatch(setSort(i))
    setActiveSort(false)
  }

  const setSortIconValue = (sort: boolean) => {
    dispatch(setSortIcon(!sort))
  } 

  React.useEffect(() => {
    document.body.addEventListener('click', (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        path: Node[]
      }
      if(sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setActiveSort(false)  
      }
    })
  }, [])

    return (
        <div ref={sortRef} className='genre__section_sort'>
          <a href="#" onClick={() => setSortIconValue(sortIcon)}><svg className={sortIcon ? 'sort_icon' : 'sort_icon active'} width="66" height="42" viewBox="0 0 66 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33 0L65.0429 42H0.957062L33 0Z" fill="#E8E8E8"/>
          </svg></a>
            Сортировать по:
            <a className='sort_btn' href="#" onClick={() => setActiveSort(!activeSort)}>{sortType.name}</a>
            <div className= {activeSort ? 'sort_popup' : 'sort_popup sort_hide'}>
            <ul>
              {sortList.map((sort, index) => {
                return <a key={index} href="#" onClick={() => {onClickListItem(sort)}}>
                  <li className= {
                    sortType.sortProperty === sort.sortProperty ? 'sort_active' : ''}>{sort.name}</li>
                  </a>
              })}
            </ul>
          </div>
          </div>
    )
}

export default Sort