(this.webpackJsonprapidwifi=this.webpackJsonprapidwifi||[]).push([[38],{720:function(e,t,a){"use strict";a.r(t);var n=a(161),r=a(156),l=a(157),s=a(159),c=a(158),o=a(1),m=a.n(o),i=a(614),d=a(615),u=a(619),h=a.n(u),g=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).handleCancel=function(){l.props.history.push("/users")},l.handleSubmit=function(){var e=l.state,t=e.id,a=e.gst_id,n=e.status,r=e.gst_percent,s=e.gst_fromdate,c=e.gst_todate;if(!(a&&r&&s&&c&&n))return alert("please fill the all details"),!1;h.a.put("http://localhost:8080/webapi/modifygst/".concat(t),{gst_id:a,status:n,gst_percent:r,gst_from:s,gst_to:c,user_id:t}).then((function(e){l.props.history.push("/gst")})).catch((function(e){console.log("err",e),alert("Error try again")}))},l.handleUserChange=function(e){var t=e.target,a=t.name,r=t.value;l.setState(Object(n.a)({},a,r))},l.state={gst_id:"",gst_percent:"",gst_fromdate:"",gst_todate:"",status:1},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;h.a.get("http://localhost:8080/webapi/listgst/".concat(t)).then((function(a){var n=a.data,r=n.gst_id,l=n.status,s=n.gst_percent,c=n.gst_fromdate,o=n.gst_todate;e.setState({gst_id:r,status:l,gst_percent:s,gst_fromdate:c,gst_todate:o,id:t})})).catch((function(e){console.log("err",e)}))}},{key:"render",value:function(){var e=this.state,t=e.gst_id,a=e.gst_percent,n=e.gst_fromdate,r=e.gst_todate,l=e.status;return m.a.createElement(m.a.Fragment,null,m.a.createElement(o.Suspense,{fallback:m.a.createElement("div",null,"Loading...")},m.a.createElement(i.wb,null,m.a.createElement(i.u,{xs:"12",md:"10"},m.a.createElement(i.j,null,m.a.createElement(i.n,null,"GST Add",m.a.createElement("small",null," Form")),m.a.createElement(i.k,null,m.a.createElement(i.J,{action:"",method:"post",className:"form-horizontal"},m.a.createElement(i.K,{row:!0},m.a.createElement(i.u,{md:"3"},m.a.createElement(i.cb,{htmlFor:"gst-id"},"GST ID")),m.a.createElement(i.u,{xs:"12",md:"9"},m.a.createElement(i.S,{type:"text",value:t,onChange:this.handleUserChange,id:"gst-id",name:"gst_id",placeholder:"Enter GST ID"}))),m.a.createElement(i.K,{row:!0},m.a.createElement(i.u,{md:"3"},m.a.createElement(i.cb,{htmlFor:"gst-percent"},"GST %")),m.a.createElement(i.u,{xs:"12",md:"9"},m.a.createElement(i.S,{type:"text",value:a,onChange:this.handleUserChange,id:"gst-percent",name:"gst_percent",placeholder:"Enter GST %"}))),m.a.createElement(i.K,{row:!0},m.a.createElement(i.u,{md:"3"},m.a.createElement(i.cb,{htmlFor:"gst-from"},"GST FROM")),m.a.createElement(i.u,{xs:"12",md:"9"},m.a.createElement(i.S,{type:"date",value:n,onChange:this.handleUserChange,id:"gst-from",name:"gst_fromdate",placeholder:"Enter GST From Date"}))),m.a.createElement(i.K,{row:!0},m.a.createElement(i.u,{md:"3"},m.a.createElement(i.cb,{htmlFor:"gst-to"},"GST To")),m.a.createElement(i.u,{xs:"12",md:"9"},m.a.createElement(i.S,{type:"date",value:r,onChange:this.handleUserChange,id:"gst-to",name:"gst_todate",placeholder:"Enter GST To Date"}))),m.a.createElement(i.K,{row:!0},m.a.createElement(i.u,{md:"3"},m.a.createElement(i.cb,{htmlFor:"status"},"Status")),m.a.createElement(i.u,{xs:"12",md:"9"},m.a.createElement(i.xb,{custom:!0,name:"status",onChange:this.handleUserChange,value:l,id:"status"},m.a.createElement("option",{value:""},"Please select Status"),m.a.createElement("option",{value:"1"},"Active"),m.a.createElement("option",{value:"0"},"In-Active")))))),m.a.createElement(i.l,null,m.a.createElement(i.f,{type:"reset",size:"sm",color:"danger",onClick:this.handleCancel},m.a.createElement(d.a,{name:"cil-ban"})," Cancel"),"\xa0",m.a.createElement(i.f,{type:"submit",size:"sm",color:"primary",onClick:this.handleSubmit},m.a.createElement(d.a,{name:"cil-scrubber"})," Update")))))))}}]),a}(o.Component);t.default=g}}]);
//# sourceMappingURL=38.238d878d.chunk.js.map