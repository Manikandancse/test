(this.webpackJsonprapidwifi=this.webpackJsonprapidwifi||[]).push([[34],{708:function(e,a,t){"use strict";t.r(a);var n=t(161),l=t(156),r=t(157),c=t(159),o=t(158),m=t(1),i=t.n(m),s=t(614),h=t(615),u=t(619),p=t.n(u),d=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var r,c;return Object(l.a)(this,t),(c=a.call(this,e)).handleCancel=function(){c.props.history.push("/connections")},c.handleSubmit=function(){var e=c.state;e.customer_name,e.plan_name,e.plan_doj;console.log("aaa",c.state)},c.totalCalculation=function(e,a,t){return!1===c.state.if_router_available?parseInt(e)+parseInt(a)+parseInt(t):parseInt(e)+parseInt(a)},c.handleUserChange=function(e){var a=e.target,t=a.name,l=a.value,r=c.state,o=(r.instllation_charge,r.plan_amount,r.router_charge);if("plan_name"===t)p.a.get("http://localhost:8080/webapi/listplan/".concat(l)).then((function(e){var a,r=e.data,o=r.instllation_charge,m=r.plan_amount,i=r.router_charge;c.setState((a={},Object(n.a)(a,t,l),Object(n.a)(a,"instllation_charge",o),Object(n.a)(a,"plan_amount",m),Object(n.a)(a,"router_charge",i),Object(n.a)(a,"total",c.totalCalculation(o,m,i)),a))})).catch((function(e){console.log("err",e)}));else if("if_router_available"===t){var m=e.target.checked?0:o;c.setState(Object(n.a)({},t,!!e.target.checked),(function(){var e=c.state,a=e.instllation_charge,t=e.plan_amount;e.router_charge;c.setState({total:c.totalCalculation(a,t,m)})}))}else c.setState(Object(n.a)({},t,l))},c.state=(r={customer_list:[],plan_list:[],gst_list:[],customer_name:"",plan_name:"",plan_doj:"",instllation_charge:0,plan_amount:0,router_charge:0},Object(n.a)(r,"instllation_charge",0),Object(n.a)(r,"plan_amount",0),Object(n.a)(r,"router_charge",0),Object(n.a)(r,"pay_instllation_charge",0),Object(n.a)(r,"pay_plan_amount",0),Object(n.a)(r,"pay_router_charge",0),Object(n.a)(r,"discount",0),Object(n.a)(r,"total",0),Object(n.a)(r,"bill",0),Object(n.a)(r,"if_router_available",!1),r),c}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=p.a.get("http://localhost:8080/webapi/listuser"),t=p.a.get("http://localhost:8080/webapi/listplan"),n=p.a.get("http://localhost:8080/webapi/listgst");p.a.all([a,t,n]).then(p.a.spread((function(){var a=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2];e.setState({customer_list:a.data,plan_list:t.data.results,gst_list:n.data.results}),console.log("aa",a,t)}))).catch((function(e){console.log("err",e)}))}},{key:"render",value:function(){var e=this.state,a=e.customer_id,t=e.plan_id,n=e.plan_doj,l=e.plan_amount,r=(e.gst_list,e.customer_list),c=e.plan_list,o=e.instllation_charge,m=e.router_charge,u=e.pay_plan_amount,p=e.pay_instllation_charge,d=e.pay_router_charge,g=e.discount,E=e.total,_=e.bill,b=e.if_router_available;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.wb,null,i.a.createElement(s.u,{xs:"12",md:"10"},i.a.createElement(s.j,null,i.a.createElement(s.n,null,"Customer Add",i.a.createElement("small",null," Form")),i.a.createElement(s.k,null,i.a.createElement(s.J,{action:"",method:"post",className:"form-horizontal"},i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{md:"3"},i.a.createElement(s.cb,{htmlFor:"customer-name"},"Customer Name")),i.a.createElement(s.u,{xs:"12",md:"9"},i.a.createElement(s.xb,{custom:!0,name:"customer_name",onChange:this.handleUserChange,value:a,id:"customer-name"},i.a.createElement("option",{value:""},"Please select Customer"),r&&r.map((function(e){return i.a.createElement("option",{value:"".concat(e.id),key:"conn_".concat(e.id)},"".concat(e.customer_id," ").concat(e.customer_name))}))))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{md:"3"},i.a.createElement(s.cb,{htmlFor:"plan-name"},"Plan Name")),i.a.createElement(s.u,{xs:"12",md:"9"},i.a.createElement(s.xb,{custom:!0,name:"plan_name",onChange:this.handleUserChange,value:t,id:"plan-name"},i.a.createElement("option",{value:""},"Please select Plan"),c&&c.map((function(e){return i.a.createElement("option",{value:"".concat(e.id),key:"conn_".concat(e.id)},"".concat(e.plan_id," ").concat(e.plan_amount))}))))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{md:"3"},i.a.createElement(s.cb,{htmlFor:"plan-doj"},"Date")),i.a.createElement(s.u,{xs:"12",md:"9"},i.a.createElement(s.S,{type:"date",id:"plan-doj",name:"plan_doj",onChange:this.handleUserChange,value:n,placeholder:"date"}))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"plan-amount"},"Bill Amount"),i.a.createElement(s.S,{type:"text",value:l,onChange:this.handleUserChange,id:"plan-amount",name:"plan_amount",placeholder:"Plan Amount"}))),i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"instllation-charge"},"Bill Instllation Charge"),i.a.createElement(s.xb,{custom:!0,name:"instllation_charge",onChange:this.handleUserChange,value:o,id:"instllation-charge"},i.a.createElement("option",{value:""},"Please select Instllation Charge"),i.a.createElement("option",{value:"100",key:"conn_1"},"100"),i.a.createElement("option",{value:"200",key:"conn_1"},"200"),i.a.createElement("option",{value:"300",key:"conn_1"},"300")))),i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"router-charge"},"Bill Router Charge"),i.a.createElement(s.S,{type:"text",value:m,onChange:this.handleUserChange,id:"router-charge",name:"router-charge",placeholder:"Router Charge"}),i.a.createElement(s.xb,{custom:!0,name:"instllation_charge",onChange:this.handleUserChange,value:o,id:"instllation-charge"},i.a.createElement("option",{value:""},"Please select Plan"),i.a.createElement("option",{value:"100",key:"conn_1"},"100"),i.a.createElement("option",{value:"200",key:"conn_1"},"200"),i.a.createElement("option",{value:"300",key:"conn_1"},"300"))))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"pay-plan-amount"},"Pay Plan Amount"),i.a.createElement(s.S,{type:"text",value:u,onChange:this.handleUserChange,id:"pay-plan-amount",name:"pay_plan_amount",placeholder:"Plan Amount"}))),i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"pay-instllation-charge"},"Pay Instllation Charge"),i.a.createElement(s.S,{type:"text",value:p,onChange:this.handleUserChange,id:"pay-instllation-charge",name:"pay_instllation_charge",placeholder:"Instllation Charge"}))),i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,{variant:"checkbox",className:"checkbox"},i.a.createElement(s.T,{id:"pay-router-charge",name:"if_router_available",onChange:this.handleUserChange,checked:b}),i.a.createElement(s.cb,{htmlFor:"pay-router-charge"},"Pay Router Charge")),i.a.createElement(s.K,null,i.a.createElement(s.S,{type:"text",value:d,onChange:this.handleUserChange,id:"pay-router-charge",name:"pay_router-charge",placeholder:"Router Charge"})))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"total"},"Total"),i.a.createElement(s.S,{type:"text",value:E,onChange:this.handleUserChange,id:"total",name:"total",placeholder:"Total"}))),i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"discount"},"Discount"),i.a.createElement(s.S,{type:"text",value:p,onChange:this.handleUserChange,id:"pay-instllation-charge",name:"pay_instllation_charge",placeholder:"Instllation Charge"}))),i.a.createElement(s.u,{xs:"4"},i.a.createElement(s.K,null,i.a.createElement(s.cb,{htmlFor:"pay-router-charge"},"GST"),i.a.createElement(s.S,{type:"text",value:d,onChange:this.handleUserChange,id:"pay-router-charge",name:"pay_router-charge",placeholder:"Router Charge"})))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{md:"3"},i.a.createElement(s.cb,{htmlFor:"total"},"Total")),i.a.createElement(s.u,{xs:"12",md:"9"},i.a.createElement(s.S,{type:"text",value:E,onChange:this.handleUserChange,id:"total",name:"total",placeholder:"Total"}))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{md:"3"},i.a.createElement(s.cb,{htmlFor:"discount"},"Discount")),i.a.createElement(s.u,{xs:"12",md:"9"},i.a.createElement(s.S,{type:"text",value:g,onChange:this.handleUserChange,id:"discount",name:"discount",placeholder:"Discount"}))),i.a.createElement(s.K,{row:!0},i.a.createElement(s.u,{md:"3"},i.a.createElement(s.cb,{htmlFor:"Bill"},"Bill")),i.a.createElement(s.u,{xs:"12",md:"9"},i.a.createElement(s.S,{type:"text",value:_,onChange:this.handleUserChange,id:"bill",name:"bill",placeholder:"Bill"}))))),i.a.createElement(s.l,null,i.a.createElement(s.f,{type:"reset",size:"sm",color:"danger",onClick:this.handleCancel},i.a.createElement(h.a,{name:"cil-ban"})," Cancel"),"\xa0",i.a.createElement(s.f,{type:"submit",size:"sm",color:"primary",onClick:this.handleSubmit},i.a.createElement(h.a,{name:"cil-scrubber"})," Add"))))))}}]),t}(m.Component);a.default=d}}]);
//# sourceMappingURL=34.3dae34eb.chunk.js.map