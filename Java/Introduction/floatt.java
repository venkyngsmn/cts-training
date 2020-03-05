import java.io.*;
class floatt
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter a number");
		float a = Float.parseFloat(dis.readLine());
		System.out.println("Entered number is "+a);
	}
}