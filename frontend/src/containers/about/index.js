import React from 'react'
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';

export class aboutPage extends React.Component {
  render() {
    function acrdnheader1() {
      return (<div>
        ASP.NET
      </div>);
    }
    function acrdnheader2() {
      return (<div>
        ASP.NET MVC
      </div>);
    }
    function acrdnheader3() {
      return (<div>
        JavaScript
      </div>);
    }
    function acrdnContent1() {
      return (<div>
        Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.
      </div>);
    }
    function acrdnContent2() {
      return (<div>
        The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications.The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based authentication.
      </div>);
    }
    function acrdnContent3() {
      return (<div>
        JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.
      </div>);
    }
    return (<div className='control-pane'>
      <div className='control-section accordion-control-section'>
        <div className='control Accordion-sample' style={{ margin: '25px 0' }}>

          <AccordionComponent>
            <AccordionItemsDirective>
              <AccordionItemDirective header={acrdnheader1} expanded={true} content={acrdnContent1}/>
              <AccordionItemDirective header={acrdnheader2} content={acrdnContent2}/>
              <AccordionItemDirective header={acrdnheader3} content={acrdnContent3}/>
            </AccordionItemsDirective>
          </AccordionComponent>
        </div></div>
    </div>);
  }
}

export default aboutPage
