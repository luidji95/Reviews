import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Data = [
  {
    id: 1,
    name: 'Bill Anderson',
    age: 29,
    position: 'The Boss',
    image: 'https://www.course-api.com/images/people/person-1.jpeg',
    review: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
  },
  {
    id: 2,
    name: 'Susan Smith',
    age: 32,
    position: 'Web Developer',
    image: 'https://www.course-api.com/images/people/person-2.jpeg',
    review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: 'Anna Johnson',
    age: 36,
    position: "Web Designer",
    image: 'https://www.course-api.com/images/people/person-3.jpeg',
    review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: 'Peter Jones',
    age: 34,
    position: "Intern",
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
    review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];





function App() {
  const [employee, setEmployee] = useState(Data);


  const SupriseFunction = () => {
    console.log('aa');
  }

  return (
    <>
      {employee.map((emp) => (
        <div key={emp.id} className='employee-list'>
          <div className='picture'>
            <img src={emp.image} alt={emp.name} className='emp-picture'></img>
          </div>
          <div className='name-position'>
            <h2>{emp.name}</h2>
            <h4>{emp.position}</h4>
          </div>
          <div className='short-review'>
            <p className='review'>{emp.review}</p>
          </div>
          <button 
            className='review-item' 
            id={emp.id} 
            onClick={SupriseFunction}>
            Suprise Me
          </button>
        </div>
      ))}
    </>
  )
}

export default App
