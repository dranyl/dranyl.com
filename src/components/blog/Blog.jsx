import BlogList from '../blogList/BlogList'
import './blog.scss'
import { useState, useEffect } from 'react'
import {
  data_all,
  data_java,
  data_react,
  data_python,
  data_others,
  // designPortfolio,
  // contentPortfolio,
} from '../../data'

export default function Blog() {
  const [selected, setSelected] = useState('all')
  const [data, setData] = useState([])

  const list = [
    {
      id: 'all',
      title: 'All',
    },
    {
      id: 'java',
      title: 'Java',
    },
    {
      id: 'react',
      title: 'React',
    },
    {
      id: 'python',
      title: 'Python',
    },
    {
      id: 'others',
      title: 'Others',
    },
    // {
    //   id: 'design',
    //   title: 'Design',
    // },
    // {
    //   id: 'content',
    //   title: 'Content',
    // },
  ]

  useEffect(() => {
    switch (selected) {
      case 'all':
        setData(data_all)
        break
      case 'java':
        setData(data_java)
        break
      case 'react':
        setData(data_react)
        break
      case 'python':
        setData(data_python)
        break
      case 'others':
        setData(data_others)
        break
      // case 'design':
      //   setData(designPortfolio)
      //   break
      // case 'content':
      //   setData(contentPortfolio)
      //   break
      default:
        setData(data_all)
    }
  }, [selected])

  return (
    <div className='blog' id='blog'>
      <h1>Blog</h1>
      <ul>
        {list.map((item) => (
          <BlogList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt='' />
            {/* <a href={d.url} target='_blank' rel='noreferrer'> */}
            {/* <h3> */}
            <a href={d.url} target='_blank' rel='noreferrer'>
              {d.title}
            </a>
            {/* </h3> */}
            {/* </a> */}
          </div>
        ))}
      </div>
    </div>
  )
}
