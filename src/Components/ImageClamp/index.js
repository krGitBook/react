// import React from 'react';
// import './index.less'
//
// import 'css/amazeui.cropper.css'
// import 'css/amazeui.min.css'
// import 'css/amazeui.cropper.css'
//
// export default class ImageClamp extends React.Component {
//
//     componentDidMount(){
//
//         $(document).ready(function(){
//         $("#up-img-touch").click(function(){
//         		  $("#up-modal-frame").modal({});
//         });
// });
// $(function() {
//     'use strict';
//     // 初始化
//     var $image = $('#up-img-show');
//     $image.cropper({
//         aspectRatio: '1',
//         autoCropArea:0.8,
//         preview: '.up-pre-after',
//         responsive:true,
//     });
//
//     // 上传图片
//     var $inputImage = $('.up-modal-frame .up-img-file');
//     var URL = window.URL || window.webkitURL;
//     var blobURL;
//
//     if (URL) {
//         $inputImage.change(function () {
//
//             var files = this.files;
//             var file;
//
//             if (files && files.length) {
//                file = files[0];
//
//                if (/^image\/\w+$/.test(file.type)) {
//                     blobURL = URL.createObjectURL(file);
//                     $image.one('built.cropper', function () {
//                         // Revoke when load complete
//                        URL.revokeObjectURL(blobURL);
//                     }).cropper('reset').cropper('replace', blobURL);
//                     $inputImage.val('');
//                 } else {
//                     window.alert('Please choose an image file.');
//                 }
//             }
//         });
//     } else {
//         $inputImage.prop('disabled', true).parent().addClass('disabled');
//     }
//
//     //绑定上传事件
//     $('.up-modal-frame .up-btn-ok').on('click',function(){
//     	var $modal_loading = $('#up-modal-loading');
//     	var $modal_alert = $('#up-modal-alert');
//     	var img_src=$image.attr("src");
//     	if(img_src==""){
//     		set_alert_info("没有选择上传的图片");
//     		$modal_alert.modal();
//     		return false;
//     	}
//
//     	$modal_loading.modal();
//
//     	var url=$(this).attr("url");
//     	//parameter
//     	var parameter=$(this).attr("parameter");
//     	//console.log(parameter);
//     	var parame_json = eval('(' + parameter + ')');
//     	var width=parame_json.width;
//     	var height=parame_json.height;
//     	console.log(parame_json.width);
//     	console.log(parame_json.height);
//
//     	//控制裁剪图片的大小
//     	var canvas=$image.cropper('getCroppedCanvas',{width: width,height: height});
//     	var data=canvas.toDataURL(); //转成base64
//         $.ajax( {
//                 url:url,
//                 dataType:'json',
//                 type: "POST",
//                 data: {"image":data.toString()},
//                 success: function(data, textStatus){
//                 	$modal_loading.modal('close');
//                 	set_alert_info(data.result);
//                 	$modal_alert.modal();
//                 	if(data.result=="ok"){
//                 		$("#up-img-touch img").attr("src",data.file);
//                 		var img_name=data.file.split('/')[2];
//                 		//console.log(img_name);
//                 		$(".up-img-txt a").text(img_name);
//                 		$("#up-modal-frame").modal('close');
//                 	}
//                 },
//                 error: function(){
//                 	$modal_loading.modal('close');
//                 	set_alert_info("上传文件失败了！");
//                 	$modal_alert.modal();
//                 	//console.log('Upload error');
//                 }
//          });
//
//     });
//
//     $('#up-btn-left').on('click',function(){
//     	$("#up-img-show").cropper('rotate', 90);
//     });
//     $('#up-btn-right').on('click',function(){
//     	$("#up-img-show").cropper('rotate', -90);
//     });
// });
//
//
// function set_alert_info(content){
// 	$("#alert_content").html(content);
// }
//
//
//
//
//
//
//
//
//
//
//
//     }
//
//
// 	render() {
//         const {title} = this.props;
//
// 		return (
//       <div className="up-img-cover"  id="up-img-touch" >
//       <img className="am-circle" alt="点击图片上传" src="" data-am-popover="{content: '点击上传', trigger: 'hover focus'}" >
//     </div>
//     <div className="up-img-txt"><label>上传图片名称:</label><a >hu.jpg</a></div>
//
//     <!--图片上传框-->
//     <div className="am-modal am-modal-no-btn up-modal-frame" tabindex="-1" id="up-modal-frame">
//     <div className="am-modal-dialog up-frame-parent up-frame-radius">
//       <div className="am-modal-hd up-frame-header">
//          <label>修改头像</label>
//         <a href="javascript: void(0)" className="am-close am-close-spin" data-am-modal-close>&times;</a>
//       </div>
//       <div className="am-modal-bd  up-frame-body">
//         <div className="am-g am-fl">
//
//           <div className="am-form-group am-form-file">
//           <div className="am-fl">
//             <button type="button" className="am-btn am-btn-default am-btn-sm">
//               <i className="am-icon-cloud-upload"></i> 选择要上传的文件</button>
//           </div>
//           <input type="file" className="up-img-file">
//         </div>
//         </div>
//         <div className="am-g am-fl">
//           <div className="up-pre-before up-frame-radius">
//             <img alt="" src="" className="up-img-show" id="up-img-show" >
//           </div>
//           <div className="up-pre-after up-frame-radius">
//           </div>
//         </div>
//         <div className="am-g am-fl">
//         <div className="up-control-btns">
//           <span className="am-icon-rotate-left"   id="up-btn-left"></span>
//           <span className="am-icon-rotate-right"  id="up-btn-right"></span>
//           <span className="am-icon-check up-btn-ok" url="/admin/user/upload.action"
//             parameter="{width:'100',height:'100'}">
//           </span>
//         </div>
//         </div>
//
//       </div>
//     </div>
//   </div>
//
//     <!--加载框-->
//     <div className="am-modal am-modal-loading am-modal-no-btn" tabindex="-1" id="up-modal-loading">
//     <div className="am-modal-dialog">
//       <div className="am-modal-hd">正在上传...</div>
//       <div className="am-modal-bd">
//         <span className="am-icon-spinner am-icon-spin"></span>
//       </div>
//     </div>
//   </div>
//
//   <!--警告框-->
//   <div className="am-modal am-modal-alert" tabindex="-1" id="up-modal-alert">
//     <div className="am-modal-dialog">
//       <div className="am-modal-hd">信息</div>
//       <div className="am-modal-bd"  id="alert_content">
//                 成功了
//       </div>
//       <div className="am-modal-footer">
//         <span className="am-modal-btn">确定</span>
//       </div>
//     </div>
//   </div>
//
// 		);
//
// 	}
//
// }
