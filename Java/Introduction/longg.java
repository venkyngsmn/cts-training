import java.io.*;
class longg
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter a number");
		long a = Long.parseLong(dis.readLine());
		System.out.println("Entered number is "+a);
	}
}