import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import React from "react"
import { debounce } from "lodash"
import { setSearchValue } from "../redux/slices/filterSlice"
import { useDispatch } from "react-redux"

const Header: React.FC = () => {
    const location = useLocation()
    const [activeMenu, setActiveMenu] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch()
    const menuRef = React.useRef<HTMLDivElement>(null)
    const menuIconRef = React.useRef<HTMLAnchorElement>(null)
    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 400), []
    )

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    React.useEffect(() => {
        document.body.addEventListener('click', (e) => {
          if(!e.composedPath().includes(menuRef.current!)) {
            setActiveMenu(false) 
          }
        })
      }, [])

    return (
      <header className="header">
          <nav className="navbar">
              <Link to="/" className="nav__logo"><span className="logo-key">key</span>store</Link>
              <div className="search-holder">
                  <input value={value} onChange={(e) => {onChangeInput(e)}} placeholder="Найти игру или дополнение" maxLength={30} className="nav_search" type="search"/>
                  <svg className="search__icon" width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="search__icon_path" d="M9.51761 20.5049L2 28M6.33333 12.8333C6.33333 18.8164 11.1836 23.6667 17.1667 23.6667C23.1498 23.6667 28 18.8164 28 12.8333C28 6.85024 23.1498 2 17.1667 2C11.1836 2 6.33333 6.85024 6.33333 12.8333Z" stroke="#4e4e4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
              </div>
              <div className="nav__btn_holder">
                  <Link to='/signin'><button className="nav__sign-in">Войти</button></Link>
                  <div className="nav__btn_holder_icons">
                      <Link className={location.pathname === '/favourites' ? 'cart_icon cart_icon_active' : 'cart_icon'} to="/favourites"><svg width="28" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.1667 1C27.45 1 31 5.8425 31 10.36C31 19.5088 16.2667 27 16 27C15.7333 27 1 19.5088 1 10.36C1 5.8425 4.55 1 9.83333 1C12.8667 1 14.85 2.47875 16 3.77875C17.15 2.47875 19.1333 1 22.1667 1Z" stroke="#E8E8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg></Link>
                      <Link className={location.pathname === '/cart' ? 'cart_icon cart_icon_active' : 'cart_icon'} to="/cart"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.76633 3.88889H24C25.6569 3.88889 27 5.23203 27 6.88889V11C27 12.6569 25.6569 14 24 14H7.33333M25.5556 19.7778H8.22222L5.72469 3.54383C5.49954 2.08033 4.24029 1 2.75958 1H1M9.66667 25.5556C9.66667 26.3533 9.01996 27 8.22222 27C7.42448 27 6.77778 26.3533 6.77778 25.5556C6.77778 24.7578 7.42448 24.1111 8.22222 24.1111C9.01996 24.1111 9.66667 24.7578 9.66667 25.5556ZM25.5556 25.5556C25.5556 26.3533 24.9089 27 24.1111 27C23.3133 27 22.6667 26.3533 22.6667 25.5556C22.6667 24.7578 23.3133 24.1111 24.1111 24.1111C24.9089 24.1111 25.5556 24.7578 25.5556 25.5556Z" stroke="#E8E8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          </Link>
                  </div>
              </div>
          </nav>
          <div ref={menuRef} className="menu">
              <div className="dropdown_btn" onClick={() => {setActiveMenu(!activeMenu)}}><span className={activeMenu ? 'dropdown-icon active' : 'dropdown-icon'}></span></div>
              <div className={activeMenu ? "dropdown": "dropdown hide"}>
              <div className="search-holder">
                  <input value={value} onChange={(e) => {onChangeInput(e)}} placeholder="Найти игру или дополнение" maxLength={30} className="nav_search" type="search"/>
                  <svg className="search__icon" width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="search__icon_path" d="M9.51761 20.5049L2 28M6.33333 12.8333C6.33333 18.8164 11.1836 23.6667 17.1667 23.6667C23.1498 23.6667 28 18.8164 28 12.8333C28 6.85024 23.1498 2 17.1667 2C11.1836 2 6.33333 6.85024 6.33333 12.8333Z" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
              </div>
              <div className="nav__btn_holder">
                  <Link to="/signin"><button onClick={() => {setActiveMenu(false)}} className="nav__sign-in">Войти</button></Link>
                  <div className="nav__btn_holder_icons">
                      <Link to="/favourites"><svg className="favourites_icon" onClick={() => {setActiveMenu(false)}} width="28" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.1667 1C27.45 1 31 5.8425 31 10.36C31 19.5088 16.2667 27 16 27C15.7333 27 1 19.5088 1 10.36C1 5.8425 4.55 1 9.83333 1C12.8667 1 14.85 2.47875 16 3.77875C17.15 2.47875 19.1333 1 22.1667 1Z" stroke="#E8E8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg></Link>
                      <Link ref={menuIconRef} className={location.pathname === '/cart' ? 'cart_icon cart_icon_active' : 'cart_icon'} to="/cart"><svg onClick={() => {setActiveMenu(false)}} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.76633 3.88889H24C25.6569 3.88889 27 5.23203 27 6.88889V11C27 12.6569 25.6569 14 24 14H7.33333M25.5556 19.7778H8.22222L5.72469 3.54383C5.49954 2.08033 4.24029 1 2.75958 1H1M9.66667 25.5556C9.66667 26.3533 9.01996 27 8.22222 27C7.42448 27 6.77778 26.3533 6.77778 25.5556C6.77778 24.7578 7.42448 24.1111 8.22222 24.1111C9.01996 24.1111 9.66667 24.7578 9.66667 25.5556ZM25.5556 25.5556C25.5556 26.3533 24.9089 27 24.1111 27C23.3133 27 22.6667 26.3533 22.6667 25.5556C22.6667 24.7578 23.3133 24.1111 24.1111 24.1111C24.9089 24.1111 25.5556 24.7578 25.5556 25.5556Z" stroke="#E8E8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          </Link>
                  </div>
              </div>
              </div>
            </div>
      </header>
    )
  }

  
 

export default Header