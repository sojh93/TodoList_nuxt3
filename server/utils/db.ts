import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '192.168.100.167', // MariaDB 호스트
    user: 'root', // MariaDB 사용자명
    password: 'izex_0329', // MariaDB 비밀번호
    database: 'console_test', // 데이터베이스 이름
});

export default pool;