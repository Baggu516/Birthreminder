import React,{useState} from 'react';

const List = ({ people,value }) => {
  var d= new Date()
  var year=d.getUTCFullYear()
  var month=d.getUTCMonth()+1
  var day=d.getUTCDate()
  console.log(year,month,day)
  const [filterdata,setFilterdata]=useState(people.filter(item=>{
    return item.dob.slice(5,7)==month && item.dob.slice(8,)==day}
    ))
    console.log(filterdata)
  return (
    <>
      {value==0 && people.map((person) => {
        const { id, name, image } = person;
        var persondate=new Date(person.dob)
        // console.log(dob)
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{(year-persondate.getFullYear())-1} years</p>
            </div>
          </article>
        );
      })}
        {value==1&&filterdata.map((person) => {
        const { id, name, image } = person;
        var persondate=new Date(person.dob)
        // console.log(dob)
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{(year-persondate.getFullYear())-1} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
