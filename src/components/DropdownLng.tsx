import '../styles/dropdownLng.scss'
import Brazil from '../assets/Brazil.png'
import USA from '../assets/USA.png'
import { Dropdown } from 'react-bootstrap'


export function DropdownLng() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src={Brazil} alt="Bandeira do Brasil" /> Portugues
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
  )
}