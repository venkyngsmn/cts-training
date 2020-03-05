import java.io.*;
class shortt
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter a number");
		short a = Short.parseShort(dis.readLine());
		System.out.println("Entered number is " + a);
	}
}