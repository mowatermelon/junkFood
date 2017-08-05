DROP TABLE IF EXISTS sec_menu;
CREATE TABLE sec_menu (
  MENU_ID  varchar(128) NOT NULL,
  MENU_PARENT_ID  varchar(128) DEFAULT NULL,
  MENU_NAME  varchar(128) DEFAULT NULL,
  MENU_URL varchar(512) DEFAULT NULL,
  MENU_REMARK  varchar(128) DEFAULT NULL,
  MENU_DISPLAY  int(11) DEFAULT NULL,
  MENU_CODE  varchar(128) DEFAULT NULL,
  MENU_SORT  decimal(8,0) DEFAULT NULL,
  MENU_USES_MARK  int(11) DEFAULT NULL,
  MENU_SYSTEM_TYPE  varchar(128) DEFAULT NULL,
   PRIMARY KEY (MENU_ID),
  KEY `FK_Reference_MENU_MENU` (MENU_PARENT_ID) USING BTREE,
  CONSTRAINT `sec_menu_ibfk_1` FOREIGN KEY (MENU_PARENT_ID) REFERENCES  sec_menu (MENU_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_menu
-- ----------------------------
INSERT INTO sec_menu VALUES ('root', null, '根菜单', 'menu.action', '1', '1', '1001', '1', '1', '1');
INSERT INTO sec_menu VALUES ('05ed5cf1-78a2-4c8f-b3bd-2629b6493859', 'root', '系统管理', '/redirect_systemManage', 'TOP', '1', '05', '1', '1', null);
INSERT INTO sec_menu VALUES ('0c247492-77b1-43c0-9ea6-0c83c19ebb97', 'root', '用户管理', '/user/user_list.action', 'LEFT', '1', '0601', '1', '1', null);
INSERT INTO sec_menu VALUES ('10af597c-c06b-4503-aeee-c4cb909c4aa0', 'root', '访问日志', '/log_access', 'LEFT', '1', '050401', '1', '1', null);
INSERT INTO sec_menu VALUES ('178eb213-9857-47cb-88b3-49986302e6c7', 'root', '角色管理', '/user/role_list.action', 'LEFT', '1', '050302', '1', '1', null);
INSERT INTO sec_menu VALUES ('1f6b4da1-1d26-44be-b329-a21a941e48df', 'root', '任务管理', '/modular/task/taskManager.jsp', 'LEFT', '1', '030202', '1', '1', null);
INSERT INTO sec_menu VALUES ('2b2f19fe-aaa1-4579-bd44-56d5d70a4ba0', 'root', '数据源', '/dataSource_queryDataSourceList', 'LEFT', '1', '0501', '1', '1', null);
INSERT INTO sec_menu VALUES ('32904f67-c362-47d6-831d-513cf1279df5', 'root', '角色', '/user/role_list.action?type=DataServiceCenter', 'LEFT', '1', '050302', '1', '1', null);
INSERT INTO sec_menu VALUES ('3706ec51-ed3c-46c2-a815-489df4d6ad80', 'root', '机构', '/user/org_list.action?type=DataServiceCenter', 'LEFT', '1', '050303', '1', '1', null);
INSERT INTO sec_menu VALUES ('37dde4e7-ab31-4191-911a-7427bfa143ac', 'root', '标签库', '/tagEnum_queryTagEnumList', 'LEFT', '1', '0502', '1', '1', null);
INSERT INTO sec_menu VALUES ('45132e00-1607-422a-86e6-cd299d57a597', 'root', '数据融合', '/redirect_dfsManage', 'TOP', '1', '03', '1', '1', null);
INSERT INTO sec_menu VALUES ('46ac0690-076c-4277-bccf-42f6ef91f0ce', 'root', '任务执行日志', '/modular/log/taskExecuteLog.jsp', 'LEFT', '1', '0401', '1', '1', null);
INSERT INTO sec_menu VALUES ('491532ec-d7fb-4343-8e5c-5c4641d1f2d6', 'root', '系统操作日志', '/view/dfs/modular/log/operatorLogList.jsp', 'LEFT', '1', '030402', '1', '1', null);
INSERT INTO sec_menu VALUES ('493ed2cf-460d-4921-98e6-a0d40a3bf43f', 'root', '方案管理', '/view/dfs/modular/schema/schemaManage.jsp', 'LEFT', '1', '030101', '1', '1', null);
INSERT INTO sec_menu VALUES ('4d928065-66d4-4cd7-9f78-418439aa4b08', 'root', '节点管理', '/view/dfs/modular/node/nodeManage.jsp', 'LEFT', '1', '030302', '1', '1', null);
INSERT INTO sec_menu VALUES ('5098dabd-1326-4183-b6fc-6b7865572551', 'root', '任务创建', '/view/dfs/modular/task/createTask.jsp', 'LEFT', '1', '030201', '1', '1', null);
INSERT INTO sec_menu VALUES ('5e83f03d-af44-44d7-a474-abdf0c8b64cc', 'root', '节点', '#', 'LEFT', '1', '0303', '1', '1', null);
INSERT INTO sec_menu VALUES ('5f8ab6fd-6852-48b2-a2ca-76e771580e85', 'root', '系统参数设置', '/modular/system/smtpInfo.jsp', 'LEFT', '1', '0508', '1', '1', null);
INSERT INTO sec_menu VALUES ('68d9818a-18f4-4f34-8026-e4ce4bb23bee', 'root', '任务', 'xxx.action', 'LEFT', '1', '0302', '1', '1', null);
INSERT INTO sec_menu VALUES ('6b58eaac-30d2-47ca-9ea2-5b84667c4ba3', 'root', '机构管理', '/user/org_list.action', 'LEFT', '1', '0505', '1', '1', null);
INSERT INTO sec_menu VALUES ('6d478dc3-b613-424c-bc01-bd2c8e2ed191', 'root', '节点管理', '/modular/node/nodeManage.jsp', 'LEFT', '1', '030302', '1', '1', null);
INSERT INTO sec_menu VALUES ('7844b965-01d4-483e-b19d-118d75c1dcd4', 'root', '日志', 'xxx.action', 'LEFT', '1', '0304', '1', '1', null);
INSERT INTO sec_menu VALUES ('7a015743-4aec-4e26-81ab-feca35c0ce6b', 'root', '操作日志', '/log_operation', 'LEFT', '1', '050402', '1', '1', null);
-- INSERT INTO sec_menu VALUES ('7d33dc24-9bac-426c-bb58-9ef9e4cdc7a8', 'root', '数据服务', '/暂未开放', 'TOP', '1', '04', '1', '1', null);
INSERT INTO sec_menu VALUES ('7da2a632-b3fd-4be0-baa4-dca706fae83d', 'root', '权限管理', '/user/perm_list.action', 'LEFT', '1', '050304', '1', '1', null);
INSERT INTO sec_menu VALUES ('852bb07d-5787-408a-a703-77f439f8ed01', 'root', '分组管理', '/modular/node/nodeGroupList.jsp', 'LEFT', '1', '030301', '1', '1', null);
INSERT INTO sec_menu VALUES ('a07655ff-036a-4c78-8c23-0aa793323bce', 'root', '机构', '/user/org_list.action', 'LEFT', '1', '050303', '1', '1', null);
INSERT INTO sec_menu VALUES ('a33454bc-2f01-4d49-96d5-9da29f492668', 'root', '数据仓库', '/home_welcome', 'TOP', '1', '02', '1', '1', null);
INSERT INTO sec_menu VALUES ('a6d4fc77-0220-4aca-bb68-73e65a053c80', 'root', '得到资源库信息', '/dfslogin', '33', '1', '33', '1', '1', null);
INSERT INTO sec_menu VALUES ('aaba3810-0141-41b5-ba98-186bfe5db4be', 'root', '系统', '/user/role_list.action#', 'LEFT', '1', '0500', '1', '1', null);
INSERT INTO sec_menu VALUES ('aad96a25-e578-48ff-8c19-a9d3e2952227', 'root', '系统操作日志', '/modular/log/operatorLogList.jsp', 'LEFT', '1', '0402', '1', '1', null);
INSERT INTO sec_menu VALUES ('b05f7577-3d92-49a4-b99d-2d1c74a8e0eb', 'root', '用户与权限', 'xxx.action', 'LEFT', '1', '0503', '1', '1', null);
INSERT INTO sec_menu VALUES ('b8ceaa13-cf77-49bf-af58-947bf8fdd3dc', 'root', '日志记录', 'xxx.action', 'LEFT', '1', '0504', '1', '1', null);
INSERT INTO sec_menu VALUES ('c387f39a-7e6c-45e8-91aa-6dc3e8b30a8f', 'root', '方案库', 'xxx.action', 'LEFT', '1', '0301', '1', '1', null);
INSERT INTO sec_menu VALUES ('c6256cd0-7745-4449-a76a-d074b455f32f', 'root', '首页', '/modular/index.jsp', '首页', '1', '0000', '1', '1', null);
INSERT INTO sec_menu VALUES ('c9a56616-fb44-4fb4-a0b0-f4d344f6a528', 'root', '任务', 'xxx.action', 'LEFT', '1', '0302', '1', '1', null);
INSERT INTO sec_menu VALUES ('cba07288-0a26-482f-b2aa-93c24b59eb15', 'root', '任务管理', '/view/dfs/modular/task/taskManager.jsp', 'LEFT', '1', '030202', '1', '1', null);
INSERT INTO sec_menu VALUES ('cc66f116-69fe-44b9-bf23-b1921e4918b7', 'root', '日志', 'xxx.action', 'LEFT', '1', '0400', '1', '1', null);
INSERT INTO sec_menu VALUES ('cdc44a59-9a44-4e4c-a011-0e5c51fa7524', 'root', '权限', '/user/perm_list.action?type=DataServiceCenter', 'LEFT', '1', '050304', '1', '1', null);
INSERT INTO sec_menu VALUES ('d0237a08-9aa1-4e21-a790-0207dd3c3694', 'root', '方案库', 'xxx.action', 'LEFT', '1', '0301', '1', '1', null);
INSERT INTO sec_menu VALUES ('d217c1e0-4a4f-49b7-a25a-41977c05c9e9', 'root', '节点', 'xxx.action', 'LEFT', '1', '0303', '1', '1', null);
INSERT INTO sec_menu VALUES ('d2cb031b-ca2c-4562-90cd-7735a3133d1a', 'root', '运行日志', '/log_runtime', 'LEFT', '1', '050403', '1', '1', null);
INSERT INTO sec_menu VALUES ('dce456ff-264e-4146-8118-ab019e9a62a6', 'root', '任务创建', '/modular/task/createTask.jsp', '0203', '1', 'LEFT', '1', '1', null);
INSERT INTO sec_menu VALUES ('e97dbd13-4c86-4c59-8443-4faa979fe294', 'root', '分组管理', '/view/dfs/modular/node/nodeGroupList.jsp', 'LEFT', '1', '030301', '1', '1', null);
INSERT INTO sec_menu VALUES ('ed6a674e-b38b-4093-b2f3-fd7373145746', 'root', '首页', '/index_resSummary', 'TOP', '1', '01', '1', '1', null);
INSERT INTO sec_menu VALUES ('ef7e3f61-0e00-4230-9f53-06b3d8b2a0a6', 'root', '方案管理', '/modular/schema/schemaManage.jsp', 'LEFT', '1', '030101', '1', '1', null);
INSERT INTO sec_menu VALUES ('fa29bb0d-4cc2-4b97-b491-3ddafe13d485', 'root', '任务执行日志', '/view/dfs/modular/log/taskExecuteLog.jsp', 'LEFT', '1', '030401', '1', '1', null);
INSERT INTO sec_menu VALUES ('ffb721c0-1790-4777-b64d-fb5911b59702', 'root', '用户', '/user/user_list.action?type=DataServiceCenter', 'LEFT', '1', '050301', '1', '1', null);




-- ----------------------------
-- Table structure for sec_operation
-- ----------------------------
DROP TABLE IF EXISTS sec_operation;
CREATE TABLE sec_operation (
  OPERATION_ID varchar(128) NOT NULL,
  OPERATION_NAME  varchar(128) DEFAULT NULL,
  OPERATION_CODE  varchar(128) DEFAULT NULL,
  OPERATION_URL  varchar(512) DEFAULT NULL,
  OPERATION_SORT decimal(8,0) DEFAULT NULL,
  OPERATION_USES_MARK int(11) DEFAULT NULL,
  OPERATION_PARENT_ID  varchar(512) DEFAULT NULL,
  PRIMARY KEY (OPERATION_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_operation
-- ----------------------------

-- ----------------------------
-- Table structure for sec_organization
-- ----------------------------
DROP TABLE IF EXISTS sec_organization;
CREATE TABLE sec_organization (
  ORG_ID varchar(128) NOT NULL,
  ORG_PARENT_ID  varchar(128) DEFAULT NULL,
  ORG_CODE varchar(128) DEFAULT NULL,
  ORG_NAME  varchar(128) DEFAULT NULL,
  ORG_REMARK  varchar(512) DEFAULT NULL,
  ORG_TELEPHONE  varchar(20) DEFAULT NULL,
  ORG_FAX  varchar(20) DEFAULT NULL,
 ORG_ZIP_CODE  varchar(20) DEFAULT NULL,
  ORG_ADDRESS  varchar(512) DEFAULT NULL,
  PRIMARY KEY (ORG_ID),
  KEY `FK_Reference_ORG_ORG` (ORG_PARENT_ID) USING BTREE,
  CONSTRAINT `sec_organization_ibfk_1` FOREIGN KEY (ORG_PARENT_ID) REFERENCES sec_organization (ORG_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_organization
-- ----------------------------
INSERT INTO sec_organization VALUES ('root', null, '1001', '顶级组织机构', '001', '1008097', '123498', '134', '武汉');

-- ----------------------------
-- Table structure for sec_role
-- ----------------------------
DROP TABLE IF EXISTS sec_role;
CREATE TABLE sec_role (
  ROLE_ID varchar(128) NOT NULL,
  ROLE_NAME varchar(128) DEFAULT NULL,
  ROLE_USES_MARK int(11) DEFAULT NULL,
  ROLE_REMARK varchar(512) DEFAULT NULL,
  PRIMARY KEY (ROLE_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_role
-- ----------------------------
INSERT INTO sec_role VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'DFMS_超级管理员', '1', '数据融合管理系统超级管理员');
INSERT INTO sec_role VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'DWMS_超级管理员', '1', 'DWMS_超级管理员');
INSERT INTO sec_role VALUES ('96464757-d02c-4500-a945-93e28d187ac3', '超级管理员角色', '1', '超级管理员角色');


-- ----------------------------
-- Table structure for sec_user
-- ----------------------------
DROP TABLE IF EXISTS sec_user;
CREATE TABLE sec_user (
  USER_IS_SUPER_ADMIN int(11) DEFAULT NULL,
  USER_CREATETIME timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  USER_ENABLED_TIME timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  USER_INVALID_TIME timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  USER_ID varchar(128) NOT NULL,
  USER_LOGIN_NAME varchar(128) DEFAULT NULL,
  USER_PASSWORD varchar(128) DEFAULT NULL,
  USER_USES_MARK int(11) DEFAULT NULL,
  PRIMARY KEY (USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_user
-- ----------------------------
INSERT INTO sec_user VALUES ('1', '2015-07-28 16:58:15', '2015-01-01 00:00:00', '2015-07-28 16:57:07', '1eb69aed-2b82-45b0-a7f5-bc1629abb3a4', 'admin_dwms', 'e10adc3949ba59abbe56e057f20f883e', '1');
INSERT INTO sec_user VALUES ('0', '2015-07-16 12:31:14', '2015-07-16 00:00:00', '2016-05-19 00:00:00', '38b257cb-66e1-49f4-9c93-78d2d20ca403', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '1');
INSERT INTO sec_user VALUES ('0', '2015-07-29 14:08:02', '2015-07-29 00:00:00', '2017-01-31 00:00:00', '87bb0042-13f1-4a94-ab57-d8be84cb3274', 'admin_dfms', 'e10adc3949ba59abbe56e057f20f883e', '1');

-- ----------------------------
-- Table structure for sec_pageelement
-- ----------------------------
DROP TABLE IF EXISTS sec_pageelement;
CREATE TABLE sec_pageelement (
  ELEMENT_ID varchar(128) NOT NULL,
  ELEMENT_NAME varchar(128) DEFAULT NULL,
  ELEMENT_CODE varchar(128) DEFAULT NULL,
 ELEMENT_SORT decimal(8,0) DEFAULT NULL,
  ELEMENT_USES_MARK int(11) DEFAULT NULL,
  PRIMARY KEY (ELEMENT_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_pageelement
-- ----------------------------

-- ----------------------------
-- Table structure for sec_permissions
-- ----------------------------
DROP TABLE IF EXISTS sec_permissions;
CREATE TABLE sec_permissions (
  PERM_ID   varchar(128) NOT NULL,
  PERM_TYPE  varchar(128) DEFAULT NULL,
  SYSTEM_TYPE  varchar(128) DEFAULT NULL,
  PERM_NAME varchar(128) DEFAULT NULL,
  PRIMARY KEY (PERM_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_permissions
-- ----------------------------

INSERT INTO sec_permissions VALUES ('010de650-777e-4237-bc8d-b141da705910', 'menu', 'DFSCenter', '任务管理');
INSERT INTO sec_permissions VALUES ('020d1e0f-58f1-47d0-81e8-a9e6b0b2be0a', 'menu', 'DFSCenter', '系统参数设置');
INSERT INTO sec_permissions VALUES ('0eb7a74b-55f1-4bed-aa78-b376814a204b', 'menu', 'DataServiceCenter', '数据服务');
INSERT INTO sec_permissions VALUES ('0f928963-ad8c-4efb-8a1e-6e5bbfa29939', 'menu', 'DataServiceCenter', '首页');
INSERT INTO sec_permissions VALUES ('13deacca-e3ad-4055-844e-7eb338c568a7', 'menu', 'DataServiceCenter', '任务执行日志');
INSERT INTO sec_permissions VALUES ('15454819-3780-45f8-9fc4-918ddbcb8fbb', 'menu', 'DataServiceCenter', '标签库');
INSERT INTO sec_permissions VALUES ('1bf03919-5e60-4382-9503-7823065a8530', 'menu', 'DataServiceCenter', '分组管理');
INSERT INTO sec_permissions VALUES ('1d6ce79e-c9f1-4d2f-8e84-6f32fa96ab1c', 'menu', 'DFSCenter', '方案库');
INSERT INTO sec_permissions VALUES ('33b2ffe9-a35b-4d06-b75b-d63544145425', 'menu', 'DataServiceCenter', '日志');
INSERT INTO sec_permissions VALUES ('35ef149f-41f5-4696-939a-6d1702f6d932', 'menu', 'DataServiceCenter', '系统操作日志');
INSERT INTO sec_permissions VALUES ('3e3fe15c-cd1d-43d5-ba24-248ffe99d6f4', 'menu', 'DFSCenter', '首页');
INSERT INTO sec_permissions VALUES ('4227296a-eb5e-4e7f-98f3-9db8baae713f', 'menu', 'DataServiceCenter', '访问日志');
INSERT INTO sec_permissions VALUES ('490555e8-d131-4c9a-a92c-4c493166f390', 'menu', 'DataServiceCenter', '日志记录');
INSERT INTO sec_permissions VALUES ('4f98600b-443a-442a-b9db-956ac7b7f0ac', 'menu', 'DataServiceCenter', '运行日志');
INSERT INTO sec_permissions VALUES ('5473a69c-45f4-4e20-8034-3f65a0c0f87d', 'menu', 'DataServiceCenter', '节点');
INSERT INTO sec_permissions VALUES ('58717765-6b09-445a-b973-9751a16b5d33', 'menu', 'DataServiceCenter', '系统管理');
INSERT INTO sec_permissions VALUES ('5b8d3a66-a402-4024-bfb8-5ff2e716cdf4', 'menu', 'DFSCenter', '用户管理');
INSERT INTO sec_permissions VALUES ('5d8b6486-7601-4e49-859f-0ca7128eb550', 'menu', 'DFSCenter', '任务执行日志');
INSERT INTO sec_permissions VALUES ('66ea7b1b-538c-419f-9f1d-6d796e20bf1f', 'menu', 'DataServiceCenter', '用户');
INSERT INTO sec_permissions VALUES ('764cec14-a6e6-46e8-8775-dd487b19d63f', 'menu', 'DataServiceCenter', '任务创建');
INSERT INTO sec_permissions VALUES ('7c9c4115-aaaf-4d1b-a12b-f13854159a00', 'menu', 'DataServiceCenter', '用户与权限');
INSERT INTO sec_permissions VALUES ('813bda95-ef21-4a99-a914-b9686a817238', 'menu', 'DataServiceCenter', '权限');
INSERT INTO sec_permissions VALUES ('8ee5d27a-6db5-45e6-a426-630b71b18326', 'menu', 'DFSCenter', '方案管理');
INSERT INTO sec_permissions VALUES ('91b39d25-1ba5-422f-89da-da31b0e3829f', 'menu', 'DataServiceCenter', '节点管理');
INSERT INTO sec_permissions VALUES ('95b38d39-37bb-4323-920c-55d76b507987', 'menu', 'DFSCenter', '得到资源库信息');
INSERT INTO sec_permissions VALUES ('98c7a533-30cb-449c-82f2-6517c27987fc', 'menu', 'DataServiceCenter', '机构');
INSERT INTO sec_permissions VALUES ('9c33df98-47c7-4c93-91b3-06c0255bb7a0', 'menu', 'DataServiceCenter', '任务管理');
INSERT INTO sec_permissions VALUES ('a0a5d5d5-85da-4ee6-b075-71e53dc677ab', 'menu', 'DFSCenter', '机构');
INSERT INTO sec_permissions VALUES ('a526725c-8063-4cfa-ad1f-3307a457d036', 'menu', 'DFSCenter', '权限管理');
INSERT INTO sec_permissions VALUES ('a91b48db-bc0c-45fe-905b-c38658f91bed', 'menu', 'DataServiceCenter', '角色');
INSERT INTO sec_permissions VALUES ('aadab11b-670b-4ed1-b919-c44faf9056f0', 'menu', 'DFSCenter', '日志');
INSERT INTO sec_permissions VALUES ('b6128369-095a-4e14-a107-44384db4d21a', 'menu', 'DFSCenter', '分组管理');
INSERT INTO sec_permissions VALUES ('b817971d-e6f2-4631-8a85-e959f5e503d8', 'menu', 'DataServiceCenter', '数据融合');
INSERT INTO sec_permissions VALUES ('ba32d305-d84b-4763-bb94-2898aaa66a0c', 'menu', 'DataServiceCenter', '数据源');
INSERT INTO sec_permissions VALUES ('bbec1106-daeb-4c6e-9b33-89ced12a2cda', 'menu', 'DFSCenter', '节点');
INSERT INTO sec_permissions VALUES ('bdef3cfe-3d15-4656-98b4-2644bf20fc3f', 'menu', 'DataServiceCenter', '任务');
INSERT INTO sec_permissions VALUES ('c0cd55b0-9e50-4d3c-9347-a41c2dd70582', 'menu', 'DFSCenter', '任务');
INSERT INTO sec_permissions VALUES ('d21b32f9-ee40-415a-8d83-801b552dbfb4', 'menu', 'DFSCenter', '任务创建');
INSERT INTO sec_permissions VALUES ('d2523c69-06da-4692-908a-69a53ecbbdd3', 'menu', 'DataServiceCenter', '数据仓库');
INSERT INTO sec_permissions VALUES ('d49db312-099d-4288-b745-7697ada34459', 'menu', 'DFSCenter', '机构管理');
INSERT INTO sec_permissions VALUES ('dc8cb6f6-032b-47e2-aae9-81f823c9226e', 'menu', 'DFSCenter', '节点管理');
INSERT INTO sec_permissions VALUES ('de7187f7-23ef-479f-80b7-d8de19d58ceb', 'menu', 'DataServiceCenter', '操作日志');
INSERT INTO sec_permissions VALUES ('e20de987-0eda-40b6-9fd5-b0c9d5b49bc0', 'menu', 'DataServiceCenter', '方案库');
INSERT INTO sec_permissions VALUES ('efd54b5c-008b-4554-a7db-ce6b82e7d3fb', 'menu', 'DFSCenter', '系统操作日志');
INSERT INTO sec_permissions VALUES ('f0b3d571-bd09-4776-8eca-2f4049b5adf1', 'menu', 'DataServiceCenter', '方案管理');
INSERT INTO sec_permissions VALUES ('f249b599-1bb4-4cbb-90bd-4963c7b313ee', 'menu', 'DFSCenter', '系统');
INSERT INTO sec_permissions VALUES ('ff2d682e-9e5c-415c-9e4d-e50e640d7def', 'menu', 'DFSCenter', '角色管理');

-- ----------------------------
-- Table structure for sec_ref_menu_permissions
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_menu_permissions;
CREATE TABLE sec_ref_menu_permissions (
  PERM_ID  varchar(128) DEFAULT NULL,
  MENU_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_MENUPERM_MENU` (MENU_ID) USING BTREE,
  KEY `FK_Reference_MENUPERM_PERMISSIONS` (PERM_ID) USING BTREE,
  CONSTRAINT `sec_ref_menu_permissions_ibfk_1` FOREIGN KEY (MENU_ID) REFERENCES sec_menu (MENU_ID),
  CONSTRAINT `sec_ref_menu_permissions_ibfk_2` FOREIGN KEY (PERM_ID) REFERENCES sec_permissions (PERM_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_menu_permissions
-- ----------------------------
INSERT INTO sec_ref_menu_permissions VALUES ('ff2d682e-9e5c-415c-9e4d-e50e640d7def', '178eb213-9857-47cb-88b3-49986302e6c7');
INSERT INTO sec_ref_menu_permissions VALUES ('a0a5d5d5-85da-4ee6-b075-71e53dc677ab', 'a07655ff-036a-4c78-8c23-0aa793323bce');
INSERT INTO sec_ref_menu_permissions VALUES ('a526725c-8063-4cfa-ad1f-3307a457d036', '7da2a632-b3fd-4be0-baa4-dca706fae83d');
INSERT INTO sec_ref_menu_permissions VALUES ('1d6ce79e-c9f1-4d2f-8e84-6f32fa96ab1c', 'd0237a08-9aa1-4e21-a790-0207dd3c3694');
INSERT INTO sec_ref_menu_permissions VALUES ('8ee5d27a-6db5-45e6-a426-630b71b18326', 'ef7e3f61-0e00-4230-9f53-06b3d8b2a0a6');
INSERT INTO sec_ref_menu_permissions VALUES ('c0cd55b0-9e50-4d3c-9347-a41c2dd70582', 'c9a56616-fb44-4fb4-a0b0-f4d344f6a528');
INSERT INTO sec_ref_menu_permissions VALUES ('010de650-777e-4237-bc8d-b141da705910', '1f6b4da1-1d26-44be-b329-a21a941e48df');
INSERT INTO sec_ref_menu_permissions VALUES ('bbec1106-daeb-4c6e-9b33-89ced12a2cda', '5e83f03d-af44-44d7-a474-abdf0c8b64cc');
INSERT INTO sec_ref_menu_permissions VALUES ('b6128369-095a-4e14-a107-44384db4d21a', '852bb07d-5787-408a-a703-77f439f8ed01');
INSERT INTO sec_ref_menu_permissions VALUES ('dc8cb6f6-032b-47e2-aae9-81f823c9226e', '6d478dc3-b613-424c-bc01-bd2c8e2ed191');
INSERT INTO sec_ref_menu_permissions VALUES ('aadab11b-670b-4ed1-b919-c44faf9056f0', 'cc66f116-69fe-44b9-bf23-b1921e4918b7');
INSERT INTO sec_ref_menu_permissions VALUES ('f249b599-1bb4-4cbb-90bd-4963c7b313ee', 'aaba3810-0141-41b5-ba98-186bfe5db4be');
INSERT INTO sec_ref_menu_permissions VALUES ('5b8d3a66-a402-4024-bfb8-5ff2e716cdf4', '0c247492-77b1-43c0-9ea6-0c83c19ebb97');
INSERT INTO sec_ref_menu_permissions VALUES ('5d8b6486-7601-4e49-859f-0ca7128eb550', '46ac0690-076c-4277-bccf-42f6ef91f0ce');
INSERT INTO sec_ref_menu_permissions VALUES ('efd54b5c-008b-4554-a7db-ce6b82e7d3fb', 'aad96a25-e578-48ff-8c19-a9d3e2952227');
INSERT INTO sec_ref_menu_permissions VALUES ('3e3fe15c-cd1d-43d5-ba24-248ffe99d6f4', 'c6256cd0-7745-4449-a76a-d074b455f32f');
INSERT INTO sec_ref_menu_permissions VALUES ('d21b32f9-ee40-415a-8d83-801b552dbfb4', 'dce456ff-264e-4146-8118-ab019e9a62a6');
INSERT INTO sec_ref_menu_permissions VALUES ('d49db312-099d-4288-b745-7697ada34459', '6b58eaac-30d2-47ca-9ea2-5b84667c4ba3');
INSERT INTO sec_ref_menu_permissions VALUES ('7c9c4115-aaaf-4d1b-a12b-f13854159a00', 'b05f7577-3d92-49a4-b99d-2d1c74a8e0eb');
INSERT INTO sec_ref_menu_permissions VALUES ('a91b48db-bc0c-45fe-905b-c38658f91bed', '32904f67-c362-47d6-831d-513cf1279df5');
INSERT INTO sec_ref_menu_permissions VALUES ('4f98600b-443a-442a-b9db-956ac7b7f0ac', 'd2cb031b-ca2c-4562-90cd-7735a3133d1a');
INSERT INTO sec_ref_menu_permissions VALUES ('13deacca-e3ad-4055-844e-7eb338c568a7', 'fa29bb0d-4cc2-4b97-b491-3ddafe13d485');
INSERT INTO sec_ref_menu_permissions VALUES ('9c33df98-47c7-4c93-91b3-06c0255bb7a0', 'cba07288-0a26-482f-b2aa-93c24b59eb15');
INSERT INTO sec_ref_menu_permissions VALUES ('ba32d305-d84b-4763-bb94-2898aaa66a0c', '2b2f19fe-aaa1-4579-bd44-56d5d70a4ba0');
INSERT INTO sec_ref_menu_permissions VALUES ('d2523c69-06da-4692-908a-69a53ecbbdd3', 'a33454bc-2f01-4d49-96d5-9da29f492668');
INSERT INTO sec_ref_menu_permissions VALUES ('490555e8-d131-4c9a-a92c-4c493166f390', 'b8ceaa13-cf77-49bf-af58-947bf8fdd3dc');
INSERT INTO sec_ref_menu_permissions VALUES ('4227296a-eb5e-4e7f-98f3-9db8baae713f', '10af597c-c06b-4503-aeee-c4cb909c4aa0');
INSERT INTO sec_ref_menu_permissions VALUES ('66ea7b1b-538c-419f-9f1d-6d796e20bf1f', 'ffb721c0-1790-4777-b64d-fb5911b59702');
INSERT INTO sec_ref_menu_permissions VALUES ('58717765-6b09-445a-b973-9751a16b5d33', '05ed5cf1-78a2-4c8f-b3bd-2629b6493859');
INSERT INTO sec_ref_menu_permissions VALUES ('0f928963-ad8c-4efb-8a1e-6e5bbfa29939', 'ed6a674e-b38b-4093-b2f3-fd7373145746');
INSERT INTO sec_ref_menu_permissions VALUES ('764cec14-a6e6-46e8-8775-dd487b19d63f', '5098dabd-1326-4183-b6fc-6b7865572551');
INSERT INTO sec_ref_menu_permissions VALUES ('5473a69c-45f4-4e20-8034-3f65a0c0f87d', 'd217c1e0-4a4f-49b7-a25a-41977c05c9e9');
INSERT INTO sec_ref_menu_permissions VALUES ('91b39d25-1ba5-422f-89da-da31b0e3829f', '4d928065-66d4-4cd7-9f78-418439aa4b08');
INSERT INTO sec_ref_menu_permissions VALUES ('b817971d-e6f2-4631-8a85-e959f5e503d8', '45132e00-1607-422a-86e6-cd299d57a597');
INSERT INTO sec_ref_menu_permissions VALUES ('813bda95-ef21-4a99-a914-b9686a817238', 'cdc44a59-9a44-4e4c-a011-0e5c51fa7524');
INSERT INTO sec_ref_menu_permissions VALUES ('1bf03919-5e60-4382-9503-7823065a8530', 'e97dbd13-4c86-4c59-8443-4faa979fe294');
INSERT INTO sec_ref_menu_permissions VALUES ('98c7a533-30cb-449c-82f2-6517c27987fc', '3706ec51-ed3c-46c2-a815-489df4d6ad80');
INSERT INTO sec_ref_menu_permissions VALUES ('de7187f7-23ef-479f-80b7-d8de19d58ceb', '7a015743-4aec-4e26-81ab-feca35c0ce6b');
INSERT INTO sec_ref_menu_permissions VALUES ('bdef3cfe-3d15-4656-98b4-2644bf20fc3f', '68d9818a-18f4-4f34-8026-e4ce4bb23bee');
INSERT INTO sec_ref_menu_permissions VALUES ('e20de987-0eda-40b6-9fd5-b0c9d5b49bc0', 'c387f39a-7e6c-45e8-91aa-6dc3e8b30a8f');
INSERT INTO sec_ref_menu_permissions VALUES ('15454819-3780-45f8-9fc4-918ddbcb8fbb', '37dde4e7-ab31-4191-911a-7427bfa143ac');
INSERT INTO sec_ref_menu_permissions VALUES ('f0b3d571-bd09-4776-8eca-2f4049b5adf1', '493ed2cf-460d-4921-98e6-a0d40a3bf43f');
INSERT INTO sec_ref_menu_permissions VALUES ('35ef149f-41f5-4696-939a-6d1702f6d932', '491532ec-d7fb-4343-8e5c-5c4641d1f2d6');
INSERT INTO sec_ref_menu_permissions VALUES ('33b2ffe9-a35b-4d06-b75b-d63544145425', '7844b965-01d4-483e-b19d-118d75c1dcd4');
-- INSERT INTO sec_ref_menu_permissions VALUES ('0eb7a74b-55f1-4bed-aa78-b376814a204b', '7d33dc24-9bac-426c-bb58-9ef9e4cdc7a8');
INSERT INTO sec_ref_menu_permissions VALUES ('95b38d39-37bb-4323-920c-55d76b507987', 'a6d4fc77-0220-4aca-bb68-73e65a053c80');
INSERT INTO sec_ref_menu_permissions VALUES ('020d1e0f-58f1-47d0-81e8-a9e6b0b2be0a', '5f8ab6fd-6852-48b2-a2ca-76e771580e85');

-- ----------------------------
-- Table structure for sec_ref_operation_permissions
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_operation_permissions;
CREATE TABLE sec_ref_operation_permissions (
  PERM_ID varchar(128) DEFAULT NULL,
  OPERATION_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_OPERPERM_OPERATION` (OPERATION_ID) USING BTREE,
  KEY `FK_Reference_OPERPERM_PERMISSIONS` (PERM_ID) USING BTREE,
  CONSTRAINT `sec_ref_operation_permissions_ibfk_1` FOREIGN KEY (OPERATION_ID) REFERENCES sec_operation (OPERATION_ID),
  CONSTRAINT `sec_ref_operation_permissions_ibfk_2` FOREIGN KEY (PERM_ID) REFERENCES sec_permissions (PERM_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_operation_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for sec_ref_org_role
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_org_role;
CREATE TABLE sec_ref_org_role (
  ORG_ID varchar(128) DEFAULT NULL,
  ROLE_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_ORGROLE_ORGANIZATION` (ORG_ID) USING BTREE,
  KEY `FK_Reference_ORGROLE_ROLE` (ROLE_ID) USING BTREE,
  CONSTRAINT `sec_ref_org_role_ibfk_1` FOREIGN KEY (ORG_ID) REFERENCES sec_organization (ORG_ID),
  CONSTRAINT `sec_ref_org_role_ibfk_2` FOREIGN KEY (ROLE_ID) REFERENCES sec_role (ROLE_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_org_role
-- ----------------------------

-- ----------------------------
-- Table structure for sec_ref_pageelement_perm
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_pageelement_perm;
CREATE TABLE sec_ref_pageelement_perm (
  ELEMENT_ID varchar(128) DEFAULT NULL,
  PERM_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_PAGEELEPERM_PAGEELEMENT` (ELEMENT_ID) USING BTREE,
  KEY `FK_Reference_PAGEELEPERM_PERMISSIONS` (PERM_ID) USING BTREE,
  CONSTRAINT `sec_ref_pageelement_perm_ibfk_1` FOREIGN KEY (ELEMENT_ID) REFERENCES sec_pageelement (ELEMENT_ID),
  CONSTRAINT `sec_ref_pageelement_perm_ibfk_2` FOREIGN KEY (PERM_ID) REFERENCES sec_permissions (PERM_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_pageelement_perm
-- ----------------------------

-- ----------------------------
-- Table structure for sec_ref_role_permissions
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_role_permissions;
CREATE TABLE sec_ref_role_permissions (
  ROLE_ID varchar(128) DEFAULT NULL,
  PERM_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_ROLEPERM_PERMISSIONS` (PERM_ID) USING BTREE,
  KEY `FK_Reference_ROLEPERM_ROLE` (ROLE_ID) USING BTREE,
  CONSTRAINT `sec_ref_role_permissions_ibfk_1` FOREIGN KEY (PERM_ID) REFERENCES sec_permissions (PERM_ID),
  CONSTRAINT `sec_ref_role_permissions_ibfk_2` FOREIGN KEY (ROLE_ID) REFERENCES sec_role (ROLE_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_role_permissions
-- ----------------------------
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '764cec14-a6e6-46e8-8775-dd487b19d63f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '13deacca-e3ad-4055-844e-7eb338c568a7');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'de7187f7-23ef-479f-80b7-d8de19d58ceb');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '490555e8-d131-4c9a-a92c-4c493166f390');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '15454819-3780-45f8-9fc4-918ddbcb8fbb');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '66ea7b1b-538c-419f-9f1d-6d796e20bf1f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '9c33df98-47c7-4c93-91b3-06c0255bb7a0');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '33b2ffe9-a35b-4d06-b75b-d63544145425');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '91b39d25-1ba5-422f-89da-da31b0e3829f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '813bda95-ef21-4a99-a914-b9686a817238');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '5473a69c-45f4-4e20-8034-3f65a0c0f87d');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '98c7a533-30cb-449c-82f2-6517c27987fc');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'f0b3d571-bd09-4776-8eca-2f4049b5adf1');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'e20de987-0eda-40b6-9fd5-b0c9d5b49bc0');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'ba32d305-d84b-4763-bb94-2898aaa66a0c');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '1bf03919-5e60-4382-9503-7823065a8530');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '4f98600b-443a-442a-b9db-956ac7b7f0ac');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'b817971d-e6f2-4631-8a85-e959f5e503d8');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '35ef149f-41f5-4696-939a-6d1702f6d932');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'a91b48db-bc0c-45fe-905b-c38658f91bed');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'd2523c69-06da-4692-908a-69a53ecbbdd3');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '7c9c4115-aaaf-4d1b-a12b-f13854159a00');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '0f928963-ad8c-4efb-8a1e-6e5bbfa29939');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '58717765-6b09-445a-b973-9751a16b5d33');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '0eb7a74b-55f1-4bed-aa78-b376814a204b');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'bdef3cfe-3d15-4656-98b4-2644bf20fc3f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '4227296a-eb5e-4e7f-98f3-9db8baae713f');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'd21b32f9-ee40-415a-8d83-801b552dbfb4');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '010de650-777e-4237-bc8d-b141da705910');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'd49db312-099d-4288-b745-7697ada34459');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '5b8d3a66-a402-4024-bfb8-5ff2e716cdf4');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'bbec1106-daeb-4c6e-9b33-89ced12a2cda');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'a0a5d5d5-85da-4ee6-b075-71e53dc677ab');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '020d1e0f-58f1-47d0-81e8-a9e6b0b2be0a');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'efd54b5c-008b-4554-a7db-ce6b82e7d3fb');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'c0cd55b0-9e50-4d3c-9347-a41c2dd70582');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '1d6ce79e-c9f1-4d2f-8e84-6f32fa96ab1c');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '8ee5d27a-6db5-45e6-a426-630b71b18326');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '95b38d39-37bb-4323-920c-55d76b507987');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'ff2d682e-9e5c-415c-9e4d-e50e640d7def');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'f249b599-1bb4-4cbb-90bd-4963c7b313ee');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'aadab11b-670b-4ed1-b919-c44faf9056f0');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'a526725c-8063-4cfa-ad1f-3307a457d036');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'b6128369-095a-4e14-a107-44384db4d21a');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', 'dc8cb6f6-032b-47e2-aae9-81f823c9226e');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '5d8b6486-7601-4e49-859f-0ca7128eb550');
INSERT INTO sec_ref_role_permissions VALUES ('78375589-507c-45f9-86cb-f14bb0d44664', '3e3fe15c-cd1d-43d5-ba24-248ffe99d6f4');

INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '764cec14-a6e6-46e8-8775-dd487b19d63f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '13deacca-e3ad-4055-844e-7eb338c568a7');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'de7187f7-23ef-479f-80b7-d8de19d58ceb');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '490555e8-d131-4c9a-a92c-4c493166f390');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '15454819-3780-45f8-9fc4-918ddbcb8fbb');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '66ea7b1b-538c-419f-9f1d-6d796e20bf1f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '9c33df98-47c7-4c93-91b3-06c0255bb7a0');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '33b2ffe9-a35b-4d06-b75b-d63544145425');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '91b39d25-1ba5-422f-89da-da31b0e3829f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '813bda95-ef21-4a99-a914-b9686a817238');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '5473a69c-45f4-4e20-8034-3f65a0c0f87d');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '98c7a533-30cb-449c-82f2-6517c27987fc');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'f0b3d571-bd09-4776-8eca-2f4049b5adf1');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'e20de987-0eda-40b6-9fd5-b0c9d5b49bc0');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'ba32d305-d84b-4763-bb94-2898aaa66a0c');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '1bf03919-5e60-4382-9503-7823065a8530');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '4f98600b-443a-442a-b9db-956ac7b7f0ac');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'b817971d-e6f2-4631-8a85-e959f5e503d8');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '35ef149f-41f5-4696-939a-6d1702f6d932');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'a91b48db-bc0c-45fe-905b-c38658f91bed');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'd2523c69-06da-4692-908a-69a53ecbbdd3');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '7c9c4115-aaaf-4d1b-a12b-f13854159a00');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '0f928963-ad8c-4efb-8a1e-6e5bbfa29939');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '58717765-6b09-445a-b973-9751a16b5d33');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '0eb7a74b-55f1-4bed-aa78-b376814a204b');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', 'bdef3cfe-3d15-4656-98b4-2644bf20fc3f');
INSERT INTO sec_ref_role_permissions VALUES ('9489428b-d533-4075-8448-aa03f0477c6c', '4227296a-eb5e-4e7f-98f3-9db8baae713f');



-- ----------------------------
-- Table structure for sec_ref_user_manageorg
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_user_manageorg;
CREATE TABLE sec_ref_user_manageorg (
  USER_ID varchar(128) DEFAULT NULL,
  ORG_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_MANAGEORG_ORGANIZATION` (ORG_ID) USING BTREE,
  KEY `FK_Reference_MANAGEORG_USER` (USER_ID) USING BTREE,
  CONSTRAINT `sec_ref_user_manageorg_ibfk_1` FOREIGN KEY (ORG_ID) REFERENCES sec_organization (ORG_ID),
  CONSTRAINT `sec_ref_user_manageorg_ibfk_2` FOREIGN KEY (USER_ID) REFERENCES sec_user (USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_user_manageorg
-- ----------------------------

-- ----------------------------
-- Table structure for sec_ref_user_organization
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_user_organization;
CREATE TABLE sec_ref_user_organization (
  USER_ID varchar(128) DEFAULT NULL,
  ORG_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_USERORG_ORGANIZATION` (ORG_ID) USING BTREE,
  KEY `FK_Reference_USERORG_USER` (USER_ID) USING BTREE,
  CONSTRAINT `sec_ref_user_organization_ibfk_1` FOREIGN KEY (ORG_ID) REFERENCES sec_organization (ORG_ID),
  CONSTRAINT `sec_ref_user_organization_ibfk_2` FOREIGN KEY (USER_ID) REFERENCES sec_user (USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_user_organization
-- ----------------------------
INSERT INTO sec_ref_user_organization VALUES ('38b257cb-66e1-49f4-9c93-78d2d20ca403', 'root');

-- ----------------------------
-- Table structure for sec_ref_user_role
-- ----------------------------
DROP TABLE IF EXISTS sec_ref_user_role;
CREATE TABLE sec_ref_user_role (
  USER_ID varchar(128) DEFAULT NULL,
  ROLE_ID varchar(128) DEFAULT NULL,
  KEY `FK_Reference_USERROLE_ROLE` (ROLE_ID) USING BTREE,
  KEY `FK_Reference_USERROLE_USER` (USER_ID) USING BTREE,
  CONSTRAINT `sec_ref_user_role_ibfk_1` FOREIGN KEY (ROLE_ID) REFERENCES sec_role (ROLE_ID),
  CONSTRAINT `sec_ref_user_role_ibfk_2` FOREIGN KEY (USER_ID) REFERENCES sec_user (USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_ref_user_role
-- ----------------------------

INSERT INTO sec_ref_user_role VALUES ('38b257cb-66e1-49f4-9c93-78d2d20ca403', '96464757-d02c-4500-a945-93e28d187ac3');
INSERT INTO sec_ref_user_role VALUES ('87bb0042-13f1-4a94-ab57-d8be84cb3274', '78375589-507c-45f9-86cb-f14bb0d44664');
INSERT INTO sec_ref_user_role VALUES ('38b257cb-66e1-49f4-9c93-78d2d20ca403', '78375589-507c-45f9-86cb-f14bb0d44664');
INSERT INTO sec_ref_user_role VALUES ('38b257cb-66e1-49f4-9c93-78d2d20ca403', '9489428b-d533-4075-8448-aa03f0477c6c');
INSERT INTO sec_ref_user_role VALUES ('1eb69aed-2b82-45b0-a7f5-bc1629abb3a4', '9489428b-d533-4075-8448-aa03f0477c6c');

-- ----------------------------
-- Table structure for sec_userinfo
-- ----------------------------
DROP TABLE IF EXISTS sec_userinfo;
CREATE TABLE sec_userinfo (
  USER_ID varchar(128) NOT NULL,
  USER_CH_NAME varchar(128) DEFAULT NULL,
  USER_EN_NAME varchar(128) DEFAULT NULL,
  USER_FULL_NAME  varchar(128) DEFAULT NULL,
  USER_GENDER  varchar(10) DEFAULT NULL,
  USER_AGE varchar(10) DEFAULT NULL,
  USER_FILE_ID varchar(128) DEFAULT NULL,
  USER_BIRTHDAY  varchar(128) DEFAULT NULL,
  USER_PLACE  varchar(128) DEFAULT NULL,
  USER_TELEPHONE  varchar(128) DEFAULT NULL,
  USER_MOBILE  varchar(128) DEFAULT NULL,
  USER_EMAIL  varchar(128) DEFAULT NULL,
  USER_ADDRESS  varchar(512) DEFAULT NULL,
  PRIMARY KEY (USER_ID),
  CONSTRAINT `sec_userinfo_ibfk_1` FOREIGN KEY (USER_ID) REFERENCES sec_user (USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sec_userinfo
-- ----------------------------
INSERT INTO sec_userinfo VALUES ('1eb69aed-2b82-45b0-a7f5-bc1629abb3a4', null, null, null, null, null, null, null, null, null, null, 'dwms@geostar.com.cn', null);
INSERT INTO sec_userinfo VALUES ('38b257cb-66e1-49f4-9c93-78d2d20ca403', null, null, null, null, null, null, null, null, null, null, '', null);
INSERT INTO sec_userinfo VALUES ('87bb0042-13f1-4a94-ab57-d8be84cb3274', null, null, null, null, null, null, null, null, null, null, '', null);

