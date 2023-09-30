import React, { useState } from 'react';

function Sort() {

  const [activeSort, setActiveSort] = useState(false)
  const [activeSortItem, setActiveSortItem] = useState(0)
  const sortList = ['популярности', 'цене', 'алфавиту']

  const onClickListItem = (i) => {
    setActiveSortItem(i)
    setActiveSort(false)
  }

    return (
        <div className='genre__section_sort'>
          <a href="#"><svg className='sort_icon' width="66" height="42" viewBox="0 0 66 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33 0L65.0429 42H0.957062L33 0Z" fill="#E8E8E8"/>
          </svg></a>
            Сортировать по: <a className='sort_btn' href="#" onClick={() => setActiveSort(!activeSort)}>{sortList[activeSortItem]}</a>

            <div className= {activeSort ? 'sort_popup' : 'sort_popup sort_hide'}>
            <ul>
              {sortList.map((sort, index) => {
                return <a key={index} href="#" onClick={() => {onClickListItem(index)}}><li className= {activeSortItem === index ? 'sort_active' : ''}>{sort}</li></a>
              })}
            </ul>
          </div>
          </div>
    )
}

export default Sort