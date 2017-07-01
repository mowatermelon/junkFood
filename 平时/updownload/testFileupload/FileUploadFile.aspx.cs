using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class FileUploadFile : System.Web.UI.Page
{




    protected void btnAdd_Click(object sender, EventArgs e)
    {
        if (upImage.HasFile)
        {
            if (CheckFileType(upImage.FileName))
            {
                String filePath = upImage.FileName;
                upImage.SaveAs(MapPath(filePath));
            }
            else
            {

            }
        }
    }

    bool CheckFileType(String fileName)
    {
        string ext = Path.GetExtension(fileName);
        switch (ext.ToLower())
        {
            case ".gif":
                return true;
            case ".png":
                return true;
            case ".jpg":
                return true;
            case ".jpeg":
                return true;
            default:
                return false;
        }
    }

    void Page_PreRender()
    {
        string upFolder = MapPath("~/UploadImages/");
        DirectoryInfo dir = new DirectoryInfo(upFolder);
        //dlstImages.DataSource = dir.GetFiles();
        dlstImages.DataBind();
    }
}