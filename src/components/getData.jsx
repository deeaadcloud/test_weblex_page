import React, { useState } from 'react';
import axios from 'axios';
import s from './getData.module.css';



function Pagination() {
    // Назначаем размер отображаемых строк в таблице для пагинации
    const pageSize = 5;
    // Загружаем данные из JSON с GitHub
    const [post, setData] = useState([]);
    const [setPage, setPagPage] = useState([0]);
    const [searchTerm, setSearchTerm] = useState([]);
    useState(() => {
        axios
            .get(`https://raw.githubusercontent.com/deeaadcloud/test_weblex_page/master/src/data/data.json`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
                setPagPage(res.data.slice(0, (res.data.length / 6)))

            })
    }, []);

    const pageNumber = post ? Math.ceil(post.length / pageSize) : 0;
    let pages = [];

    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i)
    }

    // Делаем кнопку пагинации, отображение происходит по 5 строк, на последней страннице отображается остаток массива
    const Pagination = (pageNo) => {
        setPagPage(pageNo);
        const startIndex = pageNo * pageSize;
        const endIndex = startIndex - pageSize
        const pagPage = post.slice((startIndex, endIndex))
        const pagPerPage = pagPage.slice(0, pageSize)
        setPagPage(pagPerPage)
    }
    // Делаем сортировку
    const sortData = (field) => {
        const copyData = setPage.concat();
        const sortData = copyData.sort((a, b) => { return a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1 })
        setPagPage(sortData)

    }


    return (
        <div><h1>Тестовое задание с таблицей</h1>
            {!setPage ? ("База не найдена") : (<div>
                <input className={s.input_search} type="text" placeholder="Поиск..." onChange={(e) => {
                    setSearchTerm(e.target.value)
                }} />
                <table className={s.table}>
                    <thead className={s.table_header}>
                        <tr>
                            <th>Дата</th>
                            <th onClick={() => sortData('Название')}>Название</th>
                            <th onClick={() => sortData('Количество')}>Количество</th>
                            <th onClick={() => sortData('Расстояние')}>Расстояние</th>
                        </tr>
                    </thead>
                    <tbody>
                        {setPage
                        // filter((val => {
                        //     if (searchTerm === "") {
                        //         return val;
                        //     } else if (
                        //         val.Название.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        //         val.Количество.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        //         val.Расстояние.toLowerCase().includes(searchTerm.toLowerCase())

                        //     ) {
                        //         return val
                        //     }
                        // })
                        .map((data, index) => (
                            <tr key={index}>
                                <td>{data.Дата}</td>
                                <td>{data.Название}</td>
                                <td>{data.Количество}</td>
                                <td>{data.Расстояние}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav className={s.navigation}>
                    <ul className={s.ul_style}>
                        {
                            pages.map((data) => (
                                <li className={s.page_number} onClick={() => Pagination(data)}>
                                    {data}
                                </li>
                            ))}

                    </ul>
                </nav>
            </div>
            )}

        </div>

    )
}

export default Pagination;

