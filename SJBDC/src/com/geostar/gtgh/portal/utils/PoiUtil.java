package com.geostar.gtgh.portal.utils;

import java.awt.Color;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Iterator;

import org.apache.poi.POIXMLException;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * XLS 2007 操作类
 * 
 */
public class PoiUtil {
    
    protected File xlsxfile;
    
    protected String xlsxpath;
    
    protected double value = 0;
    
    protected XSSFWorkbook wb;;
    
    protected String filepath = "";
    
    public PoiUtil(String filepath) {
        this.xlsxpath = filepath;
        try {
            wb = new XSSFWorkbook(new FileInputStream(this.xlsxpath));
        }
        catch (FileNotFoundException e) {
        }
        catch (IOException e) {
        }
        catch (POIXMLException e) {
        }
    }
    
    public boolean ifValid() {
        return wb == null ? false : true;
    }
    
    public XSSFCellStyle createCellStyle() {
        XSSFCellStyle cellstyle = wb.createCellStyle();
        cellstyle.setFillBackgroundColor((short)50);
        return cellstyle;
    }
    
    public XSSFCellStyle createLinkCellStyle() {
        XSSFCellStyle cellstyle = wb.createCellStyle();
        
        Font zfont = wb.createFont();
        zfont.setItalic(true);
        zfont.setUnderline(Font.U_SINGLE);
        zfont.setColor(Font.COLOR_NORMAL);
        cellstyle.setFont(zfont);
        
        //      cellstyle.setBorderBottom(XSSFCellStyle.BORDER_THIN); // 下边框
        //      cellstyle.setBorderLeft(XSSFCellStyle.BORDER_THIN);// 左边框
        //      cellstyle.setBorderTop(XSSFCellStyle.BORDER_THIN);// 上边框
        //      cellstyle.setBorderRight(XSSFCellStyle.BORDER_THIN);// 右边框
        //      cellstyle.setAlignment(XSSFCellStyle.ALIGN_CENTER); // 居中
        return cellstyle;
    }
    
    public XSSFCellStyle createLinkCellStyle(boolean rst) {
        XSSFCellStyle cellstyle = wb.createCellStyle();
        
        Font zfont = wb.createFont();
        zfont.setItalic(true);
        zfont.setUnderline(Font.U_SINGLE);
        if (rst) {
            zfont.setColor(Font.COLOR_NORMAL);
        }
        else {
            zfont.setColor(Font.COLOR_RED);
        }
        cellstyle.setFont(zfont);
        return cellstyle;
    }
    
    public XSSFSheet createSheet(String name) {
        return wb.createSheet(name);
    }
    
    /** 创建带数据的SHEET页 **/
    public void createSheetData(String sheetname, ArrayList<String[]> datas) {
        try {
            wb.removeName(sheetname);
        }
        catch (Exception e) {
        }
        XSSFSheet sheet = createSheet(sheetname);
        Iterator<String[]> it = datas.iterator();
        int row = 0;
        createHead(sheet, new String[] {"Subsystem Number", "Unit Number",
                "Subunit Number", "NodeB", "Administrative State",
                "Availability State"});
        while (it.hasNext()) {
            String[] data = it.next();
            createDates(sheet, data, ++row);
        }
    }
    
    private void createHead(XSSFSheet sheet, String[] heads) {
        createDates(sheet, heads, 0);
    }
    
    /** 在指定SHEET指定行写入数组 **/
    private void createDates(XSSFSheet sheet, String[] datas, int row) {
        XSSFRow xrow = sheet.createRow(row);
        for (int i = 0; i < datas.length; i++) {
            XSSFCell xcell = xrow.createCell(i);
            xcell.setCellValue(datas[i]);
        }
    }
    
    public double getValue() {
        return this.value;
    }
    
    public void setValue(double value) {
        this.value = value;
    }
    
    public XSSFSheet getSheet(String sheetname) {
        if (wb != null) {
            return wb.getSheet(sheetname);
        }
        else
            return null;
        
    }
    
    public boolean deleteSheet(String name) {
        int index = getSheetIndex(name);
        if (index < 0)
            return false;
        wb.removeSheetAt(index);
        return true;
    }
    
    public int getSheetIndex(String name) {
        for (int i = 0; i < wb.getNumberOfSheets(); i++) {
            if (wb.getSheetName(i).equals(name)
                    || wb.getSheetName(i).contains(name))
                return i;
            else
                continue;
        }
        return -1;
    }
    
    public int getSheetCount() {
        if (wb == null)
            return -1;
        return wb.getNumberOfSheets();
    }
    
    public XSSFSheet getSheet(int sheetindex) {
        if (wb != null) {
            return wb.getSheetAt(sheetindex);
        }
        else
            return null;
    }
    
    public int getRows(XSSFSheet sheet) {
        return sheet.getLastRowNum();
    }
    
    public int getRowNum(String sheetname) {
        XSSFSheet sheet = getSheet(sheetname);
        return sheet.getLastRowNum();
    }
    
    public int getRowNum(int index) {
        XSSFSheet sheet = getSheet(index);
        return sheet.getLastRowNum();
    }
    
    public int getColLength(String sheetname) {
        XSSFSheet sheet = getSheet(sheetname);
        XSSFRow row = sheet.getRow(0);
        
        return row.getLastCellNum();
    }
    
    public int getColLength(XSSFSheet sheet) {
        try {
            if (sheet.getRow(0) == null || sheet.getLastRowNum() == 0)
                return -1;
            return sheet.getRow(0).getLastCellNum();
        }
        catch (Exception e) {
            return -1;
        }
    }
    
    public XSSFCellStyle createLastCellStyle() {
        XSSFCellStyle cellstyle = wb.createCellStyle();
        XSSFColor myColor = new XSSFColor(Color.WHITE);
        cellstyle.setFillBackgroundColor(myColor);
        // cellstyle.setFillPattern(XSSFCellStyle.SOLID_FOREGROUND);
        cellstyle.setBorderBottom(XSSFCellStyle.BORDER_THIN); // 下边框
        cellstyle.setBorderLeft(XSSFCellStyle.BORDER_THIN);// 左边框
        cellstyle.setBorderTop(XSSFCellStyle.BORDER_THIN);// 上边框
        cellstyle.setBorderRight(XSSFCellStyle.BORDER_THIN);// 右边框
        cellstyle.setAlignment(XSSFCellStyle.ALIGN_CENTER); // 居中
        return cellstyle;
    }
    
    /**
     * 获取合并单元格的值
     * 
     * @param sheet
     * @param row
     * @param column
     * @return
     */
    public String getMergedRegionValue(XSSFSheet sheet, int row, int column) {
        int sheetMergeCount = sheet.getNumMergedRegions();
        
        for (int i = 0; i < sheetMergeCount; i++) {
            CellRangeAddress ca = sheet.getMergedRegion(i);
            int firstColumn = ca.getFirstColumn();
            int lastColumn = ca.getLastColumn();
            int firstRow = ca.getFirstRow();
            int lastRow = ca.getLastRow();
            
            if (row >= firstRow && row <= lastRow) {
                if (column >= firstColumn && column <= lastColumn) {
                    XSSFRow fRow = sheet.getRow(firstRow);
                    Cell fCell = fRow.getCell(firstColumn);
                    
                    return getCellValue(fCell);
                }
            }
        }
        
        return null;
    }
    
    /**
     * 获取单元格的值
     * 
     * @param cell
     * @return
     */
    public String getCellValue(Cell cell) {
        
        if (cell == null)
            return "";
        
        if (cell.getCellType() == Cell.CELL_TYPE_STRING) {
            
            return cell.getStringCellValue();
            
        }
        else if (cell.getCellType() == Cell.CELL_TYPE_BOOLEAN) {
            
            return String.valueOf(cell.getBooleanCellValue());
            
        }
        else if (cell.getCellType() == Cell.CELL_TYPE_FORMULA) {
            
            return cell.getCellFormula();
            
        }
        else if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
            
            return String.valueOf(cell.getNumericCellValue());
            
        }
        
        return "";
    }
    
    /**
     * 判断指定的单元格是否是合并单元格
     * 
     * @param sheet
     * @param row
     * @param column
     * @return
     */
    public boolean isMergedRegion(XSSFSheet sheet, int row, int column) {
        int sheetMergeCount = sheet.getNumMergedRegions();
        
        for (int i = 0; i < sheetMergeCount; i++) {
            CellRangeAddress ca = sheet.getMergedRegion(i);
            int firstColumn = ca.getFirstColumn();
            int lastColumn = ca.getLastColumn();
            int firstRow = ca.getFirstRow();
            int lastRow = ca.getLastRow();
            
            if (row >= firstRow && row <= lastRow) {
                if (column >= firstColumn && column <= lastColumn) {
                    
                    return true;
                }
            }
        }
        
        return false;
    }
    
    /** 根据行、列号获取单元格值 **/
    public String getCellValue(XSSFRow xssrow, int col) {
        NumberFormat formater = NumberFormat.getInstance();
        formater.setGroupingUsed(false);
        String cellValue = "";
        Cell cell = xssrow.getCell(col);
        
        if (cell == null)
            return null;
        switch (cell.getCellType()) {
        
            case HSSFCell.CELL_TYPE_NUMERIC:
                
                cellValue = formater.format(cell.getNumericCellValue());
                
                break;
            
            case HSSFCell.CELL_TYPE_STRING:
                
                cellValue = cell.getStringCellValue();
                
                break;
            
            case HSSFCell.CELL_TYPE_FORMULA:
                
                try {
                    cellValue = cell.getStringCellValue();
                    
                }
                catch (IllegalStateException e) {
                    cellValue = "";
                }
                
                break;
            
            case HSSFCell.CELL_TYPE_BLANK:
                
                cellValue = cell.getStringCellValue();
                
                break;
            
            case HSSFCell.CELL_TYPE_BOOLEAN:
                
                cellValue = Boolean.valueOf(cell.getBooleanCellValue())
                        .toString();
                
                break;
            
            case HSSFCell.CELL_TYPE_ERROR:
                
                cellValue = String.valueOf(cell.getErrorCellValue());
                
                break;
            
            default:
                
                cellValue = "";
                
        }
        return cellValue.trim();
    }
    
    /** 获取指定名称的SHEET页中表头数组 **/
    public String[] getHeads(String sheetname) {
        int headRow = 0; // 表头行
        String[] heads = new String[getColLength(sheetname)];
        
        XSSFSheet sheet = getSheet(sheetname);
        XSSFRow xssrow = sheet.getRow(headRow);
        
        for (int i = 0; i < heads.length; i++) {
            heads[i] = getCellValue(xssrow, i);
        }
        
        return heads;
    }
    
    /** 根据列头和SHEET获取列索引 **/
    public int getHeadIndex(XSSFSheet sheet, String headname) {
        int headrow = 0;
        try {
            XSSFRow xssrow = sheet.getRow(headrow);
            int size = getColLength(sheet);
            if (size < 0)
                return -1;
            for (int i = 0; i < size; i++) {
                String value = getCellValue(xssrow, i).trim();
                try {
                    if (checkTagMatch(headname, value))
                        return i;
                    else
                        continue;
                }
                catch (Exception e) {
                }
            }
        }
        catch (NullPointerException e) {
        }
        return -1;
    }
    
    /** 获取指定SHEET中匹配指定名称的表头列号 **/
    public int getContainHeadIndex(XSSFSheet sheet, String headname) {
        int headrow = 0;
        XSSFRow xssrow = sheet.getRow(headrow);
        for (int i = 0; i < getColLength(sheet); i++) {
            String value = getCellValue(xssrow, i).trim();
            try {
                if (checkTagMatch(headname, value))
                    return i;
                else
                    continue;
            }
            catch (Exception e) {
            }
        }
        return -1;
    }
    
    /** 检查包含左右括号的字符串是否一致,不区分中英文括号 **/
    private boolean checkTagMatch(String iniStr, String headname) {
        if (iniStr.equalsIgnoreCase(formatHeadStr(headname)))
            return true;
        if (headname.contains("（"))
            headname = headname.replaceAll("（", "(");
        if (headname.contains("）"))
            headname = headname.replaceAll("）", ")");
        if (iniStr.equalsIgnoreCase(headname))
            return true;
        if (iniStr.equalsIgnoreCase(formatHeadStr(headname)))
            return true;
        else
            return false;
    }
    
    /** 格式化指定字符串 **/
    private String formatHeadStr(String head) {
        head = head.replaceAll(" ", "");
        head = head.replaceAll("\n", "");
        head = head.replaceAll("\t", "");
        return head;
    }
    
    /** 根据列名、列名所在行，确定指定列名索引号 **/
    public int getHeadIndex(XSSFSheet sheet, String headname, int startRow) {
        int headrow = startRow;
        XSSFRow xssrow = sheet.getRow(headrow);
        for (int i = 0; i < getColLength(sheet); i++) {
            String value = getCellValue(xssrow, i).trim();
            if (checkTagMatch(headname, value))
                return i;
            else
                continue;
        }
        return -1;
        
    }
    
    /** 获取指定SHEET页名称里的所有数据 **/
    public String[][] getDatas(String sheetname) {
        int startRow = 0;
        int rowlength = getRowNum(sheetname) + 1;
        int collength = getColLength(sheetname);
        String[][] datas = new String[rowlength][collength];
        
        XSSFSheet sheet = getSheet(sheetname);
        for (int i = 0; i < rowlength - startRow; i++) {
            XSSFRow xssrow = sheet.getRow(i + startRow);
            
            for (int j = 0; j < collength; j++) {
                datas[i][j] = getCellValue(xssrow, j);
            }
        }
        
        return datas;
    }
    
    /** 获取指定SHEET中所有数据,返回二维数组 **/
    public String[][] getDatas(XSSFSheet sheet) {
        int startRow = 0;
        int rowlength = getRows(sheet) + 1;
        int collength = getColLength(sheet);
        String[][] datas = new String[rowlength][collength];
        
        for (int i = 0; i < rowlength - startRow; i++) {
            XSSFRow xssrow = sheet.getRow(i + startRow);
            
            if (xssrow == null)
                continue;
            for (int j = 0; j < collength; j++) {
                datas[i][j] = getCellValue(xssrow, j);
            }
        }
        
        return datas;
    }
    
    /** 获取指定名称SHEET中指定行对象 **/
    public XSSFRow getXssRow(String sheetname, int row) {
        XSSFSheet sheet = getSheet(sheetname);
        return sheet.getRow(row);
    }
    
    public XSSFRow getXssRow(XSSFSheet sheet, int row) {
        return sheet.getRow(row);
    }
    
    /** 关闭输出流 **/
    public void close() {
        FileOutputStream os;
        try {
            os = new FileOutputStream(xlsxpath);
            wb.write(os);
            if (os != null) {// 关闭输出流POI不负责关闭
                os.close();
            }
        }
        catch (IOException e) {
            os = null;
            e.printStackTrace();
        }
    }
    
    protected static void print(String info) {
        System.out.println(info);
    }
}