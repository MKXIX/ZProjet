import javax.servlet.http.HttpServlet;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.webapp.WebAppContext;

public class AsyncApp {
	
	public static void main(String[] args) throws Exception{
		Server server = new Server(8080);
		WebAppContext context = new WebAppContext();
		
		System.out.println(context.getContextPath());
		context.setContextPath("/");
		
		context.setInitParameter("cacheControl","no-store,no-cache,must-revalidate");
		
		HttpServlet calendarServlet = new CalendarServlet();
		context.addServlet(new ServletHolder(calendarServlet),"/calendar/*");
		
		HttpServlet loginServlet= new LoginServlet();
		context.addServlet(new ServletHolder(calendarServlet),"/login");
		
		HttpServlet signupServlet = new SignupServlet();
		context.addServlet(new ServletHolder(calendarServlet),"/signup");
		
		HttpServlet listServlet = new ListServlet();
		context.addServlet(new ServletHolder(calendarServlet),"/list/*");
		
		HttpServlet defaultServlet = new DefaultServlet();		
		context.addServlet(new ServletHolder(defaultServlet),"/");
		
		context.setResourceBase("public"); 
		
		server.setHandler(context); 
		server.start(); 
	}
}
