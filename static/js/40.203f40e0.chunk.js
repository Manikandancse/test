(this.webpackJsonprapidwifi=this.webpackJsonprapidwifi||[]).push([[40],{722:function(e,t,a){"use strict";a.r(t);var n=a(161),l=a(156),r=a(157),s=a(159),i=a(158),o=a(1),c=a.n(o),m=a(614),u=a(615),h=(a(625),a(619)),d=a.n(h),E=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).handleCancel=function(){r.props.history.push("/installation")},r.handleSubmit=function(){var e=r.state,t=e.installation_amount,a=e.status;t&&a&&d.a.post("http://localhost:8080/webapi/addinstallation",{installation_amount:t,user_id:1,area_id:1,status:a}).then((function(){r.props.history.push("/installation")})).catch((function(e){alert("Error Try again",e)}))},r.handleUserChange=function(e){var t=e.target,a=t.name,l=t.value;r.setState(Object(n.a)({},a,l))},r.state={installation_amount:0,status:1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.installation_amount,a=e.status;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.wb,null,c.a.createElement(m.u,{xs:"12",md:"10"},c.a.createElement(m.j,null,c.a.createElement(m.n,null,"Area Add",c.a.createElement("small",null," Form")),c.a.createElement(m.k,null,c.a.createElement(m.J,{action:"",method:"post",className:"form-horizontal"},c.a.createElement(m.K,{row:!0},c.a.createElement(m.u,{md:"3"},c.a.createElement(m.cb,{htmlFor:"installation-amount"},"installation_amount")),c.a.createElement(m.u,{xs:"12",md:"9"},c.a.createElement(m.S,{type:"text",value:t,onChange:this.handleUserChange,id:"installation-amount",name:"installation_amount",placeholder:"Enter Installation Amount"}))),c.a.createElement(m.K,{row:!0},c.a.createElement(m.u,{md:"3"},c.a.createElement(m.cb,{htmlFor:"status"},"Status")),c.a.createElement(m.u,{xs:"12",md:"9"},c.a.createElement(m.xb,{custom:!0,name:"status",onChange:this.handleUserChange,value:a,id:"status"},c.a.createElement("option",{value:""},"Please select Status"),c.a.createElement("option",{value:"1"},"Active"),c.a.createElement("option",{value:"0"},"In-Active")))))),c.a.createElement(m.l,null,c.a.createElement(m.f,{type:"reset",size:"sm",color:"danger",onClick:this.handleCancel},c.a.createElement(u.a,{name:"cil-ban"})," Cancel"),"\xa0",c.a.createElement(m.f,{type:"submit",size:"sm",color:"primary",onClick:this.handleSubmit},c.a.createElement(u.a,{name:"cil-scrubber"})," Add"))))))}}]),a}(o.Component);t.default=E}}]);
//# sourceMappingURL=40.203f40e0.chunk.js.map