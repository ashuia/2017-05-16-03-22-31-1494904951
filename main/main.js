module.exports = function main(var0) {
    var var1=new Array();
    var var2=new Array();
    var var3=new Array();
    var num=0;
    var relog="";
    for(var i=0;i<var0.length();i++)
    {
        num=parseInt(var0[i]);
        switch (num)
        {
          case 0:
                var1.push("._.");
                var2.push("|.|");
                var3.push("|_|");
                break;
          case 1:
                var1.push("...");
                var2.push("..|");
                var3.push("..|");
                break;
          case 2:
                var1.push("._.");
                var2.push("._|");
                var3.push("|_.");
                break;
          case 3:
                var1.push("._.");
                var2.push("._|");
                var3.push("._|");
                break;
          case 4:
                var1.push("...");
                var2.push("|_|");
                var3.push("..|");
                break;
          case 5:
                var1.push("._.");
                var2.push("|_.");
                var3.push("._|");
                break;
          case 6:
                var1.push("._.");
                var2.push("|_.");
                var3.push("|_|");
                break;
          case 7:
                var1.push("._.");
                var2.push("..|");
                var3.push("..|");
                break;
          case 8:
                var1.push("._.");
                var2.push("|_|");
                var3.push("|_|");
                break;
          case 9:
                var1.push("._.");
                var2.push("|_|");
                var3.push("..|");
                break;                
        }
    }
    for(var j=0;j<3;j++)
    {
        relog=var1.join(" ")+'\n'+var2.join(" ")+'\n'+var3.join(" ")+'\n';
    }
    return relog;
};
