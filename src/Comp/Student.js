import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Student = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetch  = async () =>{
            try{
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(resp.data);
            }catch{
                console.log("Opps something wrong")
            }
        }
        fetch();
    }, []);
    console.log(data);
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 text-center mt-4 mb-4">
                  <h1 className="text-dark">Students' list</h1>
                  <a href="/" className="btn text-dark">Go Back</a>
              </div>
              <div className="col-md-12 bg-light text-dark p-4">
                  <div className="row">
                      <div className="col-2 text-success">Name</div>
                      <div className="col-3 text-success">Email</div>
                      <div className="col-3 text-success">phone</div>
                      <div className="col-2 text-success">Address</div>
                  </div>
              </div>
              { data && data.map((d) => (
                  <div className="col-md-12 bg-dark text-white p-2">
                      <div className="row">
                    <div className="col-2">{d.name}</div>
                    <div className="col-3">{d.email}</div>
                    <div className="col-3">{d.phone}</div>
                    <div className="col-2">{d.address.city}</div>
                    <div className="col-1"><button className="btn btn-warning">edit</button></div>
                    <div className="col-1"><button className="btn btn-danger">Delete</button></div>
                      </div>
                  </div>
              ))

              }
          </div>
      </div>
  );
};

export default Student;
