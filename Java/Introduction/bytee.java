import java.io.*;
class bytee
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter a number");
		byte a = Byte.parseByte(dis.readLine());
		System.out.println("Entered number is "+a);
	}
}