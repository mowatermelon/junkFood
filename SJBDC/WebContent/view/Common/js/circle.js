function drawCircle(_options) {
	var options = _options || {}; // ��ȡ����options����;
	options.angle = options.angle; // ����Ĭ�ϽǶ�1Ϊ360��(�Ƕȷ�Χ 0-1);
	options.color = options.color || '#fff'; // ����Ĭ����ɫ����������ͱ߿���ɫ��;
	options.lineWidth = options.lineWidth || 10; // ����Ĭ��Բ��ߵĿ��;
	options.lineCap = options.lineCap || 'square'; // ������ߵ���ʽ��Ĭ��Ϊֱ�Ǳߣ�round
													// ΪԲ��

	var oBoxOne = document.getElementById(options.id);
	if (!oBoxOne) {
		return;
	}
	var sCenter = oBoxOne.width / 2; // ��ȡcanvasԪ�ص����ĵ�;

	var ctx = oBoxOne.getContext('2d');
	var nBegin = Math.PI / 2; // ������ʼ�Ƕ�;
	var nEnd = Math.PI * 2; // �������Ƕ�;
	var grd = ctx.createLinearGradient(0, 0, oBoxOne.width, 0); // grd����Ϊ��߽�����ʽ;
	grd.addColorStop(0, 'red');
	grd.addColorStop(0.5, 'yellow');
	grd.addColorStop(1, 'green');

	ctx.textAlign = 'center'; // �����������;
	ctx.font = 'normal normal bold 20px Arial'; // ��������Ӵִ�С������ʽ;
	ctx.fillStyle = options.color == 'grd' ? grd : options.color; // �ж����������ʽΪ��ɫ�����ǽ���ɫ;
	ctx.fillText((Math.floatMul(options.angle, 100)) + '%', sCenter, sCenter); // �����������;
	/*
	 * ctx.strokeStyle = grd; //���������ʽΪ����ɫ; ctx.strokeText((options.angle *
	 * 100) + '%', sCenter, sCenter); //�����������(���ο�����);
	 */
	ctx.lineCap = options.lineCap;
	ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
	ctx.lineWidth = options.lineWidth;

	ctx.beginPath(); // ������ʼ·������λ���360�ȱ���;
	ctx.strokeStyle = '#D8D8D8';
	ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, nEnd,
			false);
	ctx.stroke();

	var imd = ctx.getImageData(0, 0, 240, 240);

	function draw(current) { // �ú���ʵ�ֽǶȻ���;
		ctx.putImageData(imd, 0, 0);
		ctx.beginPath();
		ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
		ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin,
				(nEnd * current) - nBegin, false);
		ctx.stroke();
	}

	var t = 0;
	var timer = null;

	function loadCanvas(angle) { // �ú���ѭ������ָ���Ƕȣ�ʵ�ּ��ض���;
		timer = setInterval(function() {
			if (t > angle) {
				draw(options.angle);
				clearInterval(timer);
			} else {
				draw(t);
				t += 0.02;
			}
		}, 20);
	}

	loadCanvas(options.angle); // ����ٶȱȽǶ� 0-1 ��Χ;
	timer = null;

}
/**
 * Created by caolei on 2016/8/12.
 */
