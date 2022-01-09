import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react'
import {
  data_all,
  data_reactjs,
  data_python,
  // designPortfolio,
  // contentPortfolio,
} from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('all')
  const [data, setData] = useState([])

  const list = [
    {
      id: 'all',
      title: 'All',
    },
    {
      id: 'react-js',
      title: 'React-JS',
    },
    {
      id: 'python',
      title: 'Python',
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
      case 'react-js':
        setData(data_reactjs)
        break
      case 'python':
        setData(data_python)
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
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
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
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
