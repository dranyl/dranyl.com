import './blogList.scss'

export default function BlogList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? 'blogList active' : 'blogList'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}
