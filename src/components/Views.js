import React from 'react';
import axios from 'axios';
import Model from './Model'
const api = axios.create ( {
    baseURL: `http://localhost:3000/data.json`
})
class Views extends React.Component{
    state = { items: [], activity: [] }
    
    async  componentDidMount()
    {
        const res = await api.get()
            this.setState( { items: res.data.members})
            console.log(this.state.items)
            this.setState( { activity: res.data.activity})
           

        }
    
    renderList(){
        
        return this.state.items.map((item => {
            return(
                <div key={item.id}>
                    <ul className="list-group mt-3 mb-3">
                        <Model
                        name = {item.real_name }
                        location = {item.tz}
                        activity_periods = {item.activity_periods}
                        />
                    </ul>
                    
                </div>
            )
        }))
    }
    
    
    render(){
        return(
            <div className="container mt-3 border border-dark" >
                <h3 className="text-center mt-2 mb-2">List of Members</h3>
              {this.renderList()} 
            </div>
        )
    }

}
export default Views;