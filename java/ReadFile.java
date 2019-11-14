import java.util.HashMap;
import java.util.regex.Pattern;

import java.util.Random;
import java.security.SecureRandom;
import java.nio.ByteBuffer;
import java.util.Date;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Calendar;
import java.util.ArrayList;
import java.util.UUID;

import java.text.NumberFormat;
import java.util.Locale;

import java.io.*;

public class ReadFile {

	public static void main(String[] args) throws FileNotFoundException, IOException {	
		
		PrintStream out = new PrintStream(new FileOutputStream("resumen.log"));
		System.setOut(out);
		BufferedReader br1 = new BufferedReader(new FileReader("server.log"));
		
		try {
			String line = br1.readLine();
			int i = 1;
			while (line != null) {
				if (i > 169500 && i < 175000) {
					System.out.println(line);
				}
				i++;
				line = br1.readLine();
			}
			//System.err.println(i);
		} finally {
			br1.close();
		}
		
	}
}//4,709,475	2,632,489