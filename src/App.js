import './App.css';
import Card from './card.js';

function App() {

  var arr =[{
    pack : "Free",
    price: "$0",
    l1 : ["","fa-li","fas fa-check","Single User",""],
    l2 : ["","fa-li","fas fa-check","5GB Storage"],
    l3 : ["","fa-li","fas fa-check"],
    l4 : ["","fa-li","fas fa-check"],
    l5 : ["text-muted","fa-li","fas fa-times"],
    l6 : ["text-muted","fa-li","fas fa-times"],
    l7 : ["text-muted","fa-li","fas fa-times","Free ","Subdomain",""],
    l8 : ["text-muted","fa-li","fas fa-times"],
    but :"btn btn-block btn-primary text-uppercase"
    
},{
    pack : "Plus",
    price: "$9",
    l1 : ["","fa-li","fas fa-check","5 User","b"],
    l2 : ["","fa-li","fas fa-check","50GB Storage"],
    l3 : ["","fa-li","fas fa-check"],
    l4 : ["","fa-li","fas fa-check"],
    l5 : ["","fa-li","fas fa-check",],
    l6 : ["","fa-li","fas fa-check"],
    l7 : ["","fa-li","fas fa-check","Free ","Subdomain",""],
    l8 : ["text-muted","fa-li","fas fa-times"],
    but :"btn btn-block btn-primary text-uppercase"
},{
    pack : "Pro",
    price: "$49",
    l1 : ["","fa-li","fas fa-check","Unlimited Users","b"],
    l2 : ["","fa-li","fas fa-check","150GB Storage"],
    l3 : ["","fa-li","fas fa-check"],
    l4 : ["","fa-li","fas fa-check"],
    l5 : ["","fa-li","fas fa-check"],
    l6 : ["","fa-li","fas fa-check"],
    l7 : ["","fa-li","fas fa-check","Unlimited ","Free Subdomains","b"],
    l8 : ["","fa-li","fas fa-check"],
    but :"btn btn-block btn-primary text-uppercase"
}]

  return (
    <>
    <div className="pricing">
    <div className="container">
      <div className="row space">
        {
        arr.map((i)=>{
          return <Card d={i}></Card>
        })
        }
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
