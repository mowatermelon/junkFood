package com.geostar.gtgh.portal.utils;

/**
 * 2011-11-25
 * MLESO
 */

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Enumeration;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipOutputStream;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.PBEParameterSpec;

/**
 * <p>
 * Title:
 * </p>
 * <p>
 * Description:
 * </p>
 * <p>
 * Copyright: Copyright (c) 2011
 * </p>
 * <p>
 * Company: 广州微金信息技术有限公司
 * </p>
 * 
 * @author <a href="mailto:ruangf0314@163.com">ruangf</a>
 * @version 1.0
 */
public class ZipUtil {

	/***************************************************************************
	 * 压缩文件
	 * 
	 * @param srcFiles
	 *            : 要被压缩的文件名
	 * @param dstDir
	 *            : 压缩后的文件名
	 * @param comment
	 *            : 文件注释
	 */

	public static File zip(String[] srcFiles, String dstFile, String comment) throws IOException {
		if (srcFiles.length == 0)
			return null;
		File fileDst = new File(dstFile);
		File parentDir = fileDst.getParentFile();
		if (!parentDir.exists()) {
			parentDir.mkdirs();
		}
		if (fileDst.exists())
			fileDst.delete();
		fileDst.createNewFile();
		ZipOutputStream zos = new ZipOutputStream(new FileOutputStream(fileDst));
		zos.setMethod(ZipOutputStream.DEFLATED);

		if (comment != null) {
			zos.setComment(comment);
		}
		DataOutputStream dos = new DataOutputStream(zos);
		for (int i = 0; i < srcFiles.length; i++) {
			String entryPath = srcFiles[i];
			File file = new File(entryPath);
			String filename = file.getName();
			zos.putNextEntry(new ZipEntry(filename));
			File fileEntry = new File(entryPath);
			FileInputStream fis = new FileInputStream(fileEntry);
			byte[] buff = new byte[8192];
			int len = 0;
			while (true) {
				len = fis.read(buff);
				if (len == -1 || len == 0)
					break;

				dos.write(buff, 0, len);
			}
			zos.closeEntry();
			fis.close();
		}
		dos.close();
		zos.close();
		return fileDst;
	}

	/***************************************************************************
	 * 
	 * @param srcFiles
	 * @param dstFile
	 * @throws IOException
	 */
	public static File zip(String[] srcFiles, String dstFile) throws IOException {
		System.out.println();
		return zip(srcFiles, dstFile, null);
	}

	/**
	 * 解压缩文件
	 * 
	 * @param srcFile
	 * @param descDir
	 * @throws IOException
	 */
	public static void unZip(String srcFile, String descDir) throws IOException {
		unZip(new File(srcFile), descDir);
	}

	private static void unZip(File srcFile, String descDir) throws IOException {
		File pathFile = new File(descDir);
		if (!pathFile.exists()) {
			pathFile.mkdirs();
		}
		ZipFile zip = null;
		try {
			zip = new ZipFile(srcFile);
			for (Enumeration entries = zip.entries(); entries.hasMoreElements();) {
				ZipEntry entry = (ZipEntry) entries.nextElement();
				String zipEntryName = entry.getName();
				InputStream in = zip.getInputStream(entry);
				String outPath = (descDir + zipEntryName).replaceAll("\\*", "/");
				;
				// 判断路径是否存在,不存在则创建文件路径
				File file = new File(outPath.substring(0, outPath.lastIndexOf('/')));
				if (!file.exists()) {
					file.mkdir();
				}
				// 判断文件全路径是否为文件夹,如果是上面已经上传,不需要解压
				if (new File(outPath).isDirectory()) {
					continue;
				}

				OutputStream out = new FileOutputStream(outPath);
				byte[] buf1 = new byte[1024];
				int len;
				while ((len = in.read(buf1)) > 0) {
					out.write(buf1, 0, len);
				}
				in.close();
				out.close();
			}
		} catch (IOException e) {
			throw new IOException("解压缩失败：" + e.getMessage());
		} finally {
			try {
				zip.close();
			} catch (Exception e) {
			}
		}
	}

	private static final String ALGORITHM = "PBEWithMD5AndDES";

	/***************************************************************************
	 * 
	 * @param fileName
	 *            源文件名称（包括路径信息）
	 * @param password加密密码
	 * @param targetFileName
	 *            目标文件名称，也就是加密后的文件名称
	 * @throws Exception
	 */
	public static void encryptFile(String fileName, String password, String targetFileName) throws Exception {
		FileInputStream inputStream = null;
		FileOutputStream outputStream = null;
		try {
			File targetFile = new File(targetFileName);
			inputStream = new FileInputStream(fileName);
			outputStream = new FileOutputStream(targetFile);
			//
			PBEKeySpec keySpec = new PBEKeySpec(password.toCharArray());
			SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(ALGORITHM);
			SecretKey passwordKey = keyFactory.generateSecret(keySpec);
			//
			byte[] salt = new byte[8];
			Random rnd = new Random();
			rnd.nextBytes(salt);
			int iterations = 100;
			PBEParameterSpec parameterSpec = new PBEParameterSpec(salt, iterations);
			Cipher cipher = Cipher.getInstance(ALGORITHM);
			cipher.init(Cipher.ENCRYPT_MODE, passwordKey, parameterSpec);
			outputStream.write(salt);
			byte[] input = new byte[64];
			int bytesRead;
			while ((bytesRead = inputStream.read(input)) != -1) {
				byte[] output = cipher.update(input, 0, bytesRead);
				if (output != null)
					outputStream.write(output);
			}
			byte[] output = cipher.doFinal();
			if (output != null)
				outputStream.write(output);

			inputStream.close();
			outputStream.flush();
			outputStream.close();
		} finally {
			if (inputStream != null) {
				inputStream.close();
			}
			if (outputStream != null) {
				outputStream.close();
			}
		}
	}

	/***************************************************************************
	 * 
	 * @param fileName
	 *            源文件名称，也就是加密文件名称
	 * @param password
	 *            解密密码
	 * @param targetFileName
	 *            目标文件名称，也就是解密后的问题间名称
	 * @throws Exception
	 */
	public static void DecryptFile(File sourceFile, String password, String targetFileName) throws Exception {
		FileInputStream inputStream = new FileInputStream(sourceFile);
		FileOutputStream outputStream = new FileOutputStream(targetFileName);
		DecryptFile(inputStream, password, outputStream);
	}

	public static void DecryptFile(String fileName, String password, String targetFileName) throws Exception {
		FileInputStream inputStream = new FileInputStream(fileName);
		FileOutputStream outputStream = new FileOutputStream(targetFileName);
		DecryptFile(inputStream, password, outputStream);
	}

	public static void DecryptFile(InputStream inputStream, String password, OutputStream outputStream) throws Exception {
		try {
			PBEKeySpec keySpec = new PBEKeySpec(password.toCharArray());
			SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(ALGORITHM);
			SecretKey passwordKey = keyFactory.generateSecret(keySpec);
			byte[] salt = new byte[8];
			inputStream.read(salt);
			int iterations = 100;
			PBEParameterSpec parameterSpec = new PBEParameterSpec(salt, iterations);
			Cipher cipher = Cipher.getInstance(ALGORITHM);
			cipher.init(Cipher.DECRYPT_MODE, passwordKey, parameterSpec);
			byte[] input = new byte[64];
			int bytesRead;
			while ((bytesRead = inputStream.read(input)) != -1) {
				byte[] output = cipher.update(input, 0, bytesRead);
				if (output != null)
					outputStream.write(output);
			}

			byte[] output = cipher.doFinal();
			if (output != null)
				outputStream.write(output);
			outputStream.flush();
		} finally {
			if (inputStream != null) {
				inputStream.close();
			}
			if (outputStream != null) {
				outputStream.close();
			}
		}
	}
}
