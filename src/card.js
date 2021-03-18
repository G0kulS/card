import React from "react";

function Card(p)
{
    
    return <div className="col-lg-4">
           <div className="card mb-5 mb-lg-0">
           <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{p.d.pack}</h5>
            <h6 className="card-price text-center">{p.d.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li className={p.d.l1[0]}><span className={p.d.l1[1]}><i className={p.d.l1[2]}></i></span><span className={p.d.l1[4]}>{p.d.l1[3]}</span></li>
              <li className={p.d.l2[0]}><span className={p.d.l2[1]}><i className={p.d.l2[2]}></i></span>{p.d.l2[3]}</li>
              <li className={p.d.l3[0]}><span className={p.d.l3[1]}><i className={p.d.l3[2]}></i></span>Unlimited Public Projects</li>
              <li className={p.d.l4[0]}><span className={p.d.l4[1]}><i className={p.d.l4[2]}></i></span>Community Access</li>
              <li className={p.d.l5[0]}><span className={p.d.l5[1]}><i className={p.d.l5[2]}></i></span>Unlimited Private Projects</li>
              <li className={p.d.l6[0]}><span className={p.d.l6[1]}><i className={p.d.l6[2]}></i></span>Dedicated Phone Support</li>
              <li className={p.d.l7[0]}><span className={p.d.l7[1]}><i className={p.d.l7[2]}></i></span ><span className={p.d.l7[5]}>{p.d.l7[3]}</span><span>{p.d.l7[4]}</span></li>
              <li className={p.d.l8[0]}><span className={p.d.l8[1]}><i className={p.d.l8[2]}></i></span>Monthly Status Reports</li>
            </ul>
            <a href="#" class={p.d.but}>Button</a>
            </div>
     </div>       
    </div>
}

export default Card ; 