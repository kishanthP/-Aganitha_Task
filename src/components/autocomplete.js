import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { cities } from '../data/cities';
export default function MyAutoComplete (props) {
  
  const items = cities

  const handleOnSearch = (string, results) => {
    console.log(string, results)
    console.log("aldkflkasdjfl")
  }

  const handleOnHover = (result) => {
    console.log(result)
  }

  const handleOnSelect = (item) => {
  
    console.log("sadklfjlksajflkfdjlkaskfdlkj")
    console.log(item)
    props.NavbarCallback(item)
    
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    <>
      
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder='Type location to search'
            fuseOptions={{ keys: ["country", "geonameid", "name", "subcountry"]}}
          />
        </div>
    
    </>
  )
}

