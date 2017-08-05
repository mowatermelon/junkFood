CREATE TABLE qrtz_job_details
  (
    JOB_NAME  VARCHAR2(80) NOT NULL,
    JOB_GROUP VARCHAR2(80) NOT NULL,
    DESCRIPTION VARCHAR2(120) NULL,
    JOB_CLASS_NAME   VARCHAR2(128) NOT NULL, 
    IS_DURABLE VARCHAR2(1) NOT NULL,
    IS_VOLATILE VARCHAR2(1) NOT NULL,
    IS_STATEFUL VARCHAR2(1) NOT NULL,
    REQUESTS_RECOVERY VARCHAR2(1) NOT NULL,
    JOB_DATA BLOB NULL,
    PRIMARY KEY (JOB_NAME,JOB_GROUP)
);
CREATE TABLE qrtz_job_listeners
  (
    JOB_NAME  VARCHAR2(80) NOT NULL, 
    JOB_GROUP VARCHAR2(80) NOT NULL,
    JOB_LISTENER VARCHAR2(80) NOT NULL,
    PRIMARY KEY (JOB_NAME,JOB_GROUP,JOB_LISTENER),
    FOREIGN KEY (JOB_NAME,JOB_GROUP) 
	REFERENCES QRTZ_JOB_DETAILS(JOB_NAME,JOB_GROUP)
);
CREATE TABLE qrtz_triggers
  (
    TRIGGER_NAME VARCHAR2(80) NOT NULL,
    TRIGGER_GROUP VARCHAR2(80) NOT NULL,
    JOB_NAME  VARCHAR2(80) NOT NULL, 
    JOB_GROUP VARCHAR2(80) NOT NULL,
    IS_VOLATILE VARCHAR2(1) NOT NULL,
    DESCRIPTION VARCHAR2(120) NULL,
    NEXT_FIRE_TIME NUMBER(13) NULL,
    PREV_FIRE_TIME NUMBER(13) NULL,
    TRIGGER_STATE VARCHAR2(16) NOT NULL,
    TRIGGER_TYPE VARCHAR2(8) NOT NULL,
    START_TIME NUMBER(13) NOT NULL,
    END_TIME NUMBER(13) NULL,
    CALENDAR_NAME VARCHAR2(80) NULL,
    MISFIRE_INSTR NUMBER(2) NULL,
    JOB_DATA BLOB NULL,
    PRIMARY KEY (TRIGGER_NAME,TRIGGER_GROUP),
    FOREIGN KEY (JOB_NAME,JOB_GROUP) 
	REFERENCES QRTZ_JOB_DETAILS(JOB_NAME,JOB_GROUP) 
);
CREATE TABLE qrtz_simple_triggers
  (
    TRIGGER_NAME VARCHAR2(80) NOT NULL,
    TRIGGER_GROUP VARCHAR2(80) NOT NULL,
    REPEAT_COUNT NUMBER(7) NOT NULL,
    REPEAT_INTERVAL NUMBER(12) NOT NULL,
    TIMES_TRIGGERED NUMBER(7) NOT NULL,
    PRIMARY KEY (TRIGGER_NAME,TRIGGER_GROUP),
    FOREIGN KEY (TRIGGER_NAME,TRIGGER_GROUP) 
	REFERENCES QRTZ_TRIGGERS(TRIGGER_NAME,TRIGGER_GROUP)
);
CREATE TABLE qrtz_cron_triggers
  (
    TRIGGER_NAME VARCHAR2(80) NOT NULL,
    TRIGGER_GROUP VARCHAR2(80) NOT NULL,
    CRON_EXPRESSION VARCHAR2(80) NOT NULL,
    TIME_ZONE_ID VARCHAR2(80),
    PRIMARY KEY (TRIGGER_NAME,TRIGGER_GROUP),
    FOREIGN KEY (TRIGGER_NAME,TRIGGER_GROUP) 
	REFERENCES QRTZ_TRIGGERS(TRIGGER_NAME,TRIGGER_GROUP)
);
CREATE TABLE qrtz_blob_triggers
  (
    TRIGGER_NAME VARCHAR2(80) NOT NULL,
    TRIGGER_GROUP VARCHAR2(80) NOT NULL,
    BLOB_DATA BLOB NULL,
    PRIMARY KEY (TRIGGER_NAME,TRIGGER_GROUP),
    FOREIGN KEY (TRIGGER_NAME,TRIGGER_GROUP) 
        REFERENCES QRTZ_TRIGGERS(TRIGGER_NAME,TRIGGER_GROUP)
);
CREATE TABLE qrtz_trigger_listeners
  (
    TRIGGER_NAME  VARCHAR2(80) NOT NULL, 
    TRIGGER_GROUP VARCHAR2(80) NOT NULL,
    TRIGGER_LISTENER VARCHAR2(80) NOT NULL,
    PRIMARY KEY (TRIGGER_NAME,TRIGGER_GROUP,TRIGGER_LISTENER),
    FOREIGN KEY (TRIGGER_NAME,TRIGGER_GROUP) 
	REFERENCES QRTZ_TRIGGERS(TRIGGER_NAME,TRIGGER_GROUP)
);
CREATE TABLE qrtz_calendars
  (
    CALENDAR_NAME  VARCHAR2(80) NOT NULL, 
    CALENDAR BLOB NOT NULL,
    PRIMARY KEY (CALENDAR_NAME)
);
CREATE TABLE qrtz_paused_trigger_grps
  (
    TRIGGER_GROUP  VARCHAR2(80) NOT NULL, 
    PRIMARY KEY (TRIGGER_GROUP)
);
CREATE TABLE qrtz_fired_triggers 
  (
    ENTRY_ID VARCHAR2(95) NOT NULL,
    TRIGGER_NAME VARCHAR2(80) NOT NULL,
    TRIGGER_GROUP VARCHAR2(80) NOT NULL,
    IS_VOLATILE VARCHAR2(1) NOT NULL,
    INSTANCE_NAME VARCHAR2(80) NOT NULL,
    FIRED_TIME NUMBER(13) NOT NULL,
    STATE VARCHAR2(16) NOT NULL,
    JOB_NAME VARCHAR2(80) NULL,
    JOB_GROUP VARCHAR2(80) NULL,
    IS_STATEFUL VARCHAR2(1) NULL,
    REQUESTS_RECOVERY VARCHAR2(1) NULL,
    PRIMARY KEY (ENTRY_ID)
);
CREATE TABLE qrtz_scheduler_state 
  (
    INSTANCE_NAME VARCHAR2(80) NOT NULL,
    LAST_CHECKIN_TIME NUMBER(13) NOT NULL,
    CHECKIN_INTERVAL NUMBER(13) NOT NULL,
    RECOVERER VARCHAR2(80) NULL,
    PRIMARY KEY (INSTANCE_NAME)
);
CREATE TABLE qrtz_locks
  (
    LOCK_NAME  VARCHAR2(40) NOT NULL, 
    PRIMARY KEY (LOCK_NAME)
);


INSERT INTO qrtz_locks values('TRIGGER_ACCESS');
INSERT INTO qrtz_locks values('JOB_ACCESS');
INSERT INTO qrtz_locks values('CALENDAR_ACCESS');
INSERT INTO qrtz_locks values('STATE_ACCESS');
INSERT INTO qrtz_locks values('MISFIRE_ACCESS');
create index idx_qrtz_j_req_recovery on qrtz_job_details(REQUESTS_RECOVERY);
create index idx_qrtz_t_next_fire_time on qrtz_triggers(NEXT_FIRE_TIME);
create index idx_qrtz_t_state on qrtz_triggers(TRIGGER_STATE);
create index idx_qrtz_t_nft_st on qrtz_triggers(NEXT_FIRE_TIME,TRIGGER_STATE);
create index idx_qrtz_t_volatile on qrtz_triggers(IS_VOLATILE);
create index idx_qrtz_ft_trig_name on qrtz_fired_triggers(TRIGGER_NAME);
create index idx_qrtz_ft_trig_group on qrtz_fired_triggers(TRIGGER_GROUP);
create index idx_qrtz_ft_trig_nm_gp on qrtz_fired_triggers(TRIGGER_NAME,TRIGGER_GROUP);
create index idx_qrtz_ft_trig_volatile on qrtz_fired_triggers(IS_VOLATILE);
create index idx_qrtz_ft_trig_inst_name on qrtz_fired_triggers(INSTANCE_NAME);
create index idx_qrtz_ft_job_name on qrtz_fired_triggers(JOB_NAME);
create index idx_qrtz_ft_job_group on qrtz_fired_triggers(JOB_GROUP);
create index idx_qrtz_ft_job_stateful on qrtz_fired_triggers(IS_STATEFUL);
create index idx_qrtz_ft_job_req_recovery on qrtz_fired_triggers(REQUESTS_RECOVERY);

CREATE TABLE dfs_role (
  role_id integer NOT NULL,
  role_name varchar2(32) unique,
  description varchar2(255) default NULL,
  isSystemRole integer default NULL,
  PRIMARY KEY  (role_id)
) ;



CREATE TABLE dfs_role_priviledge (
  priviledge_id integer ,
  role_id integer ,
  PRIMARY KEY  (priviledge_id,role_id)
);

CREATE TABLE dfs_user (
  user_id integer NOT NULL,
  user_name varchar2(32) unique,
  password varchar2(32) default NULL,
  nick_name varchar2(32) default NULL,
  email varchar2(32) default NULL,
  mobilephone varchar2(32) default NULL,
  description varchar2(255) default NULL,
  is_system_user integer default NULL,
  PRIMARY KEY  (user_id)
);
INSERT INTO dfs_user VALUES (0,'admin','admin','管理员','','','系统管理员用户,拥有所有资源授权和所有操作权限',1);

CREATE TABLE dfs_user_resource (
  user_id integer,
  resource_id integer ,
  PRIMARY KEY  (user_id,resource_id)
) ;

CREATE TABLE dfs_node(
  node_id integer NOT NULL,
  name varchar2(128),
  ip varchar2(128),
  port integer,
  description varchar2(255),
  nodeGroup_id integer,
  status varchar2(50),
  cpupercent decimal(10,0)
  
);

CREATE TABLE dfs_nodeGroup(
  nodeGroup_id integer NOT NULL,
  name varchar2(128),
  description varchar2(255)
);
insert into dfs_nodegroup VALUES(1,'默认分组','默认分组');

CREATE TABLE dfs_repository (
  c_repository_id integer NOT NULL,
  c_repository_name varchar2(32) default NULL,
  c_user_name varchar2(32) default NULL,
  c_password varchar2(32) default NULL,
  c_version varchar2(16) default NULL,
  c_db_host varchar2(32) default NULL,
  c_db_port varchar2(8) default NULL,
  c_db_name varchar2(64) default NULL,
  c_db_type varchar2(32) default NULL,
  c_db_access varchar2(16) default NULL,
  PRIMARY KEY  (c_repository_id)
);

CREATE TABLE dfs_schema_image(
  id integer NOT NULL,
  schemaid integer,
  image CLOB
);



CREATE TABLE dfs_task_execute_log(
    ID VARCHAR2(80) NOT NULL PRIMARY KEY,
	JOBNAME VARCHAR2(80) NOT NULL ,
	JOBGROUP VARCHAR2(80),
	SCHEMANAME VARCHAR2(200),
	SCHEMATYPE VARCHAR2(50),
	STATUS VARCHAR2(50),
	START_TIME timestamp NULL,
   END_TIME timestamp NULL,
	CONTINUED_TIME NUMERIC(13,1),
   LOGMSG clob,
  NODE_ID INTEGER
);

CREATE TABLE dfs_schema_update_log(
    ID INTEGER NOT NULL PRIMARY KEY,
    SCHEMANAME VARCHAR2(200),
    CREATETIME timestamp,
    UPDATETIME timestamp
);

CREATE TABLE dfs_schema_update_info(
	ID INTEGER NOT NULL ,
	SCHEMAID  INTEGER NULL ,
	SCHEMATYPE  VARCHAR2(50) NULL ,
	CREATEDATE timestamp NULL , 
	UPDATEDATE  timestamp NULL ,
	OPERATETYPE  VARCHAR2(50) NULL ,
	SCHEMAIMAGE  BLOB NULL，
	SCHEMANAME VARCHAR2(255) DEFAULT NULL,
    ID_DIRECTORY INTEGER DEFAULT NULL,
    USERNAME VARCHAR2(255) DEFAULT NULL,
    ISPUBLISH INTEGER DEFAULT NULL,
     DESCRIPTION clob,
	PRIMARY KEY (ID)
);
CREATE TABLE dfs_operator_log(
      ID INTEGER NOT NULL ,
      LOGTIME  timestamp NULL,
      USERNAME  VARCHAR2(255) NULL,
      USERIP  VARCHAR2(255) NULL,
      OPERATORTYPE   VARCHAR2(50) NULL,
      OPERATOROBJECT  VARCHAR2(255) NULL,
      CONTENT clob NULL,
      STATUS VARCHAR2(50) NULL
);
CREATE TABLE sec_smtpinfo (
 ID  INTEGER NOT NULL ,
 SMTPHOST  VARCHAR2(50) DEFAULT NULL ,
 SMTPPORT  VARCHAR2(20) DEFAULT NULL ,
 MAILACCOUNT  VARCHAR2(80) DEFAULT NULL ,
 USENAME  VARCHAR2(50) DEFAULT NULL ,
 PASSWORD  VARCHAR2(50) DEFAULT NULL ,
PRIMARY KEY (ID)
);
commit;
