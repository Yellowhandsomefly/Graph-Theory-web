function view(){
				var a = 0 ;
				var b = 0 ;
				var c = 0 ;
				var d = 0 ;
				var e = 0 ;
				var f = 0 ;
				var g = 0 ;
				var h = 0 ;
				var i = 0 ;
				var j = 0 ;
				var sum = 0;

				var last1=(document.afform.Ans1.value);
				if(last1==2){
					a=1;
				}else{
					a=0;
				}

				var last2=(document.afform.Ans2.value);
				if(last2==1){
					b=1;
				}else{
					b=0;
				}

				var last3=(document.afform.Ans3.value);
				if(last3==3){
					c=1;
				}else{
					c=0;
				}

				var last4=(document.afform.Ans4.value);
				if(last4==3){
					d=1;
				}else{
					d=0;
				}

				var last5=(document.afform.Ans5.value);
				if(last5==4){
					e=1;
				}else{
					e=0;
				}

				var last6=(document.afform.Ans6.value);
				if(last6==1){
					f=1;
				}else{
					f=0;
				}

				var last7=(document.afform.Ans7.value);
				if(last7==3){
					g=1;
				}else{
					g=0;
				}

				var last8=(document.afform.Ans8.value);
				if(last8==1){
					h=1;
				}else{
					h=0;
				}

				var last9=(document.afform.Ans9.value);
				if(last9==2){
					i=1;
				}else{
					i=0;
				}

				var last10=(document.afform.Ans10.value);
				if(last10==4){
					j=1;
				}else{
					j=0;
				}


				sum=a+b+c+d+e+f+g+h+i+j;

				document.afform.result3.value=sum;

			}
