import java.util.HashMap;
import java.util.regex.Pattern;

import java.util.Random;
import java.security.SecureRandom;
import java.nio.ByteBuffer;
import java.util.Date;

import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.List;
import java.util.Calendar;
import java.util.ArrayList;
import java.util.UUID;

import java.text.NumberFormat;
import java.util.Locale;

import java.io.*;
import java.lang.reflect.Method;

public class Test {

	public static void main(String[] args) throws FileNotFoundException, IOException, ParseException {	

		
		Date expira = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println("Actual : " + sdf.format(expira));
		
	}

	private static boolean isEmpty(String cad) {
		if (cad == null || cad.trim().isEmpty()) {
			return true;
		}
		return false;
	}

	private static String getCodigo(String codigo) {
    	String res = "";
    	for (int i = 0; i < codigo.length(); i++) {
    		char c = codigo.charAt(i);
    		if (c != ' ') {
    			res = res + c;
    		}
    	}
    	return res;
    }

    public static String getLineaSinCero(String linea) {
		
		if (linea != null && linea.length() == 10) {
			if (linea.substring(0, 2).equals("09")) {
				linea = linea.substring(1, 10);
			}
		}
		return linea;
	}
}


class ObjectUtils {

	private ObjectUtils() {
	}

	public static Object obtener(String atributo, Object objeto) {
		for (Method metodo : objeto.getClass().getMethods()) {
			if (metodo.getName().startsWith("get")) {
				if (metodo.getName().length() == atributo.length() + 3) {
					if (metodo.getName().toLowerCase().endsWith(atributo.toLowerCase())) {
						try {
							return metodo.invoke(objeto);
						} catch (Exception e) {
						}
						break;
					}
				}
			}
		}
		return null;
	}

}