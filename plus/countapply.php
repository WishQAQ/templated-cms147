<?php
/**
 *
 * 文档统计
 *
 * 如果想显示点击次数,请增加view参数,即把下面ＪＳ调用放到文档模板适当位置
 * <script src="{dede:field name='phpurl'/}/count.php?view=yes&aid={dede:field name='id'/}&mid={dede:field name='mid'/}" language="javascript"></script>
 * 普通计数器为
 * <script src="{dede:field name='phpurl'/}/count.php?aid={dede:field name='id'/}&mid={dede:field name='mid'/}" language="javascript"></script>
 *
 * @version        $Id: count.php 1 20:43 2010年7月8日Z tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__)."/../include/common.inc.php");
if(isset($designer)){
    $row = $dsql->GetOne("select count(*) as num,designer from #@__diyappointment where designer = '$designer';");
    $num = empty($row['num'])? '0' : $row['num'];
	echo "document.write('".$num."');\r\n";
}else{
	echo "document.write('0');\r\n";
}
exit();