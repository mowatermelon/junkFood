package com.geostar.gtgh.portal.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * 
 * <poi根据模板导出excel>
 * 
 * @author  zhangguan
 * @version  [版本号, 2016年9月14日]
 * @see  [相关类/方法]
 * @since  [产品/模块版本]
 */
public class ExcelUtil {
    
    //模板map
    private Map<String, XSSFWorkbook> tempWorkbook = new HashMap<String, XSSFWorkbook>();
    
    //模板输入流map
    private Map<String, FileInputStream> tempStream = new HashMap<String, FileInputStream>();
    
    /**
     * 
     * <临时单元格数据>
     * 
     * @author  zhangguan
     * @version  [版本号, 2016年9月14日]
     * @see  [相关类/方法]
     * @since  [产品/模块版本]
     */
    class TempCell {
        private int row;
        
        private int column;
        
        private CellStyle cellStyle;
        
        private Object data;
        
        //用于列表合并，表示几列合并
        private int columnSize = -1;
        
        public int getColumn() {
            return column;
        }
        
        public void setColumn(int column) {
            this.column = column;
        }
        
        public int getRow() {
            return row;
        }
        
        public void setRow(int row) {
            this.row = row;
        }
        
        public CellStyle getCellStyle() {
            return cellStyle;
        }
        
        public void setCellStyle(CellStyle cellStyle) {
            this.cellStyle = cellStyle;
        }
        
        public Object getData() {
            return data;
        }
        
        public void setData(Object data) {
            this.data = data;
        }
        
        public int getColumnSize() {
            return columnSize;
        }
        
        public void setColumnSize(int columnSize) {
            this.columnSize = columnSize;
        }
    }
    
    /**
     * 
     * <按模板向Excel中相应地方填充数据>
     * @param tempFilePath
     * @param dataMap
     * @param sheetNo
     * @throws IOException [参数说明]
     * 
     * @return void [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    @SuppressWarnings({"rawtypes", "unchecked"})
    public void writeData(String tempFilePath, Map<String, Object> dataMap,
            int sheetNo) throws IOException {
        //读取模板
        XSSFWorkbook wb = getTempWorkbook(tempFilePath);
        //数据填充的sheet
        XSSFSheet wsheet = wb.getSheet("sheet1");
        
        Iterator it = dataMap.entrySet().iterator();
        while (it.hasNext()) {
            Entry<String, Object> entry = (Entry<String, Object>)it.next();
            String point = entry.getKey();
            Object data = entry.getValue();
            
            TempCell cell = getCell(point, data, wsheet);
            //指定坐标赋值
            setCell(cell, wsheet, false);
        }
        //设置生成excel中公式自动计算
        wsheet.setForceFormulaRecalculation(true);
    }
    
    /**
     * 
     * <按模板向Excel中列表填充数据。 >
     * @param tempFilePath
     * @param rowNum
     * @param columns
     * @param datalist
     * @param sheetNo
     * @throws FileNotFoundException
     * @throws IOException [参数说明]
     * 
     * @return void [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    public void writeDateList(String tempFilePath, int rowNum,
            List<Integer> columns, List<Map<Integer, Object>> datalist,
            int sheetNo) throws FileNotFoundException, IOException {
        //读取模板
        XSSFWorkbook wb = getTempWorkbook(tempFilePath);
        //数据填充的sheet
        XSSFSheet wsheet = wb.getSheet("sheet1");
        wsheet.removeRow(wsheet.getRow(rowNum));
        //列表数据模板cell
        List<TempCell> tempCells = new ArrayList<TempCell>();
        for (int column : columns) {
            TempCell tempCell = getCell(column, rowNum - 1, null, wsheet);
            //  取得合并单元格位置  -1：表示不是合并单元格
            int pos = isMergedRegion(wsheet,
                    tempCell.getRow(),
                    tempCell.getColumn());
            if (pos > -1) {
                CellRangeAddress range = wsheet.getMergedRegion(pos);
                tempCell.setColumnSize(range.getLastColumn()
                        - range.getFirstColumn());
            }
            tempCells.add(tempCell);
        }
        //赋值
        for (int i = 0; i < datalist.size(); i++) {
            Map<Integer, Object> dataMap = datalist.get(i);
            for (int j = 0; j < tempCells.size(); j++) {
                TempCell tempCell = tempCells.get(j);
                tempCell.setRow(tempCell.getRow() + 1);
                tempCell.setData(dataMap.get(j + 1));
                if (j == 0) {
                    setCell(tempCell, wsheet, true);
                }
                else {
                    setCell(tempCell, wsheet, false);
                }
            }
        }
    }
    
    /**
     * 
     * <保存工作薄>
     * @param wb
     * @param excelPath [参数说明]
     * 
     * @return void [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    @SuppressWarnings("unused")
    private void saveExcel(XSSFWorkbook wb, String excelPath) {
        FileOutputStream fileOut;
        try {
            fileOut = new FileOutputStream(excelPath);
            wb.write(fileOut);
            fileOut.close();
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        
    }
    
    /**
     * 
     * <获取输入工作区>
     * @param tempFilePath
     * @return
     * @throws FileNotFoundException
     * @throws IOException [参数说明]
     * 
     * @return Workbook [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    private XSSFWorkbook getTempWorkbook(String tempFilePath)
            throws FileNotFoundException, IOException {
        if (!tempWorkbook.containsKey(tempFilePath)) {
            if (tempFilePath.endsWith(".xlsx")) {
                tempWorkbook.put(tempFilePath, new XSSFWorkbook(
                        getFileInputStream(tempFilePath)));
            }
            else if (tempFilePath.endsWith(".xls")) {
                tempWorkbook.put(tempFilePath, new XSSFWorkbook(
                        getFileInputStream(tempFilePath)));
            }
        }
        return tempWorkbook.get(tempFilePath);
    }
    
    /**
     * 
     * <获得模板输入流>
     * @param tempFilePath
     * @return
     * @throws FileNotFoundException [参数说明]
     * 
     * @return FileInputStream [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    private FileInputStream getFileInputStream(String tempFilePath)
            throws FileNotFoundException {
        if (!tempStream.containsKey(tempFilePath)) {
            tempStream.put(tempFilePath, new FileInputStream(tempFilePath));
        }
        return tempStream.get(tempFilePath);
    }
    
    /**
     * 
     * <功能：设置单元格数据,样式  (根据坐标：B3)>
     * @param point
     * @param data
     * @param sheet
     * @return [参数说明]
     * 
     * @return TempCell [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    private TempCell getCell(String point, Object data, Sheet sheet) {
        TempCell tempCell = new TempCell();
        
        //得到列 字母 
        String lineStr = "";
        String reg = "[A-Z]+";
        Pattern p = Pattern.compile(reg);
        Matcher m = p.matcher(point);
        while (m.find()) {
            lineStr = m.group();
        }
        //将列字母转成列号  根据ascii转换
        char[] ch = lineStr.toCharArray();
        int column = 0;
        for (int i = 0; i < ch.length; i++) {
            char c = ch[i];
            int post = ch.length - i - 1;
            int r = (int)Math.pow(10, post);
            column = column + r * ((int)c - 65);
        }
        tempCell.setColumn(column);
        
        //得到行号
        reg = "[1-9]+";
        p = Pattern.compile(reg);
        m = p.matcher(point);
        while (m.find()) {
            tempCell.setRow((Integer.parseInt(m.group()) - 1));
        }
        
        //获取模板指定单元格样式，设置到tempCell （写列表数据的时候用）
        Row rowIn = sheet.getRow(tempCell.getRow());
        if (rowIn == null) {
            rowIn = sheet.createRow(tempCell.getRow());
        }
        Cell cellIn = rowIn.getCell(tempCell.getColumn());
        if (cellIn == null) {
            cellIn = rowIn.createCell(tempCell.getColumn());
        }
        tempCell.setCellStyle(cellIn.getCellStyle());
        
        tempCell.setData(data);
        return tempCell;
    }
    
    private TempCell getCell(int columnNum, int rowNum, Object data, Sheet sheet) {
        TempCell tempCell = new TempCell();
        tempCell.setColumn(columnNum);
        tempCell.setRow(rowNum);
        
        //获取模板指定单元格样式，设置到tempCell （写列表数据的时候用）
        Row rowIn = sheet.getRow(tempCell.getRow());
        if (rowIn == null) {
            rowIn = sheet.createRow(tempCell.getRow());
        }
        Cell cellIn = rowIn.getCell(tempCell.getColumn());
        if (cellIn == null) {
            cellIn = rowIn.createCell(tempCell.getColumn());
        }
        tempCell.setCellStyle(cellIn.getCellStyle());
        
        tempCell.setData(data);
        return tempCell;
    }
    
    /**
     * 
     * <给指定坐标赋值>
     * @param tempCell
     * @param sheet
     * @param isCreate [参数说明]
     * 
     * @return void [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    private void setCell(TempCell tempCell, XSSFSheet sheet, boolean isCreate) {
        if (tempCell.getColumnSize() > -1) {
            CellRangeAddress rangeAddress = mergeRegion(sheet,
                    tempCell.getRow(),
                    tempCell.getRow(),
                    tempCell.getColumn(),
                    tempCell.getColumn() + tempCell.getColumnSize());
            setRegionStyle(tempCell.getCellStyle(), rangeAddress, sheet);
        }
        XSSFRow rowIn;
        if (isCreate) {
            rowIn = createRow(sheet, tempCell.getRow());
        }
        else {
            rowIn = sheet.getRow(tempCell.getRow());
        }
        XSSFCell cellIn = rowIn.createCell(tempCell.getColumn());
        //根据data类型给cell赋值
        if (tempCell.getData() instanceof String) {
            cellIn.setCellValue((String)tempCell.getData());
        }
        else if (tempCell.getData() instanceof Integer) {
            ;
            cellIn.setCellValue(Integer.parseInt(String.valueOf(tempCell.getData())));
        }
        else if (tempCell.getData() instanceof Double) {
            cellIn.setCellValue(Double.parseDouble(tempCell.getData()
                    .toString()));
        }
        else {
            cellIn.setCellValue((String)tempCell.getData());
        }
        //样式
        if (tempCell.getCellStyle() != null && tempCell.getColumnSize() == -1) {
            cellIn.setCellStyle(tempCell.getCellStyle());
        }
        
    }
    
    /**
     * 找到需要插入的行数，并新建一个POI的row对象
     * @param sheet
     * @param rowIndex
     * @return
     */
    private XSSFRow createRow(XSSFSheet sheet, Integer rowIndex) {
        XSSFRow row = null;
        if (sheet.getRow(rowIndex) != null) {
            int lastRowNo = sheet.getLastRowNum();
            sheet.shiftRows(rowIndex, lastRowNo, 1);
        }
        row = sheet.createRow(rowIndex);
        return row;
    }
    
    /**
     * 
     * <写到输出流并移除资源>
     * @param tempFilePath
     * @param os
     * @throws FileNotFoundException
     * @throws IOException [参数说明]
     * 
     * @return void [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    public void writeAndClose(String tempFilePath, OutputStream os)
            throws FileNotFoundException, IOException {
        if (getTempWorkbook(tempFilePath) != null) {
            getTempWorkbook(tempFilePath).write(os);
            tempWorkbook.remove(tempFilePath);
        }
        if (getFileInputStream(tempFilePath) != null) {
            getFileInputStream(tempFilePath).close();
            tempStream.remove(tempFilePath);
        }
    }
    
    /**
     * 
     * <判断指定的单元格是否是合并单元格>
     * @param sheet
     * @param row
     * @param column
     * @return [0:不是合并单元格，i:合并单元格的位置]
     * 
     * @return Integer [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    private Integer isMergedRegion(Sheet sheet, int row, int column) {
        int sheetMergeCount = sheet.getNumMergedRegions();
        for (int i = 0; i < sheetMergeCount; i++) {
            CellRangeAddress range = sheet.getMergedRegion(i);
            int firstColumn = range.getFirstColumn();
            int lastColumn = range.getLastColumn();
            int firstRow = range.getFirstRow();
            int lastRow = range.getLastRow();
            if (row >= firstRow && row <= lastRow) {
                if (column >= firstColumn && column <= lastColumn) {
                    return i;
                }
            }
        }
        return -1;
    }
    
    /**
     * 
     * <合并单元格>
     * @param sheet
     * @param firstRow
     * @param lastRow
     * @param firstCol
     * @param lastCol
     * @return [参数说明]
     * 
     * @return CellRangeAddress [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    private CellRangeAddress mergeRegion(Sheet sheet, int firstRow,
            int lastRow, int firstCol, int lastCol) {
        CellRangeAddress rang = new CellRangeAddress(firstRow, lastRow,
                firstCol, lastCol);
        sheet.addMergedRegion(rang);
        return rang;
    }
    
    /**
     * 
     * <设置合并单元格样式>
     * @param cs
     * @param region
     * @param sheet [参数说明]
     * 
     * @return void [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    private static void setRegionStyle(CellStyle cs, CellRangeAddress region,
            Sheet sheet) {
        for (int i = region.getFirstRow(); i <= region.getLastRow(); i++) {
            Row row = sheet.getRow(i);
            if (row == null)
                row = sheet.createRow(i);
            for (int j = region.getFirstColumn(); j <= region.getLastColumn(); j++) {
                Cell cell = row.getCell(j);
                if (cell == null) {
                    cell = row.createCell(j);
                    cell.setCellValue("");
                }
                cell.setCellStyle(cs);
            }
        }
    }
    
}
