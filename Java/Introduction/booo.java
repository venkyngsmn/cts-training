import java.io.*;
class booo
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter true or false");
		boolean a = Boolean.parseBoolean(dis.readLine());
		System.out.println("You have entered "+a);
	}
}