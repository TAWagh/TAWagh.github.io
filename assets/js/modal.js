var modalInfo = {
  
    1: {
      title: "FPG Bot",
      members: "Kartikeya Pandey, Tanyeem Saifi, Ashwin G",
      info: "The μ parameter is a basic factor describing vehicle handling dynamics and hence, road safety. The Friction Profile Generator is a three wheeled bot where the rear two wheels are motor driven. The front wheel has a custom locking mechanism which restricts its rotation in a single direction.  It has an array of sensors on board such as hall effect, ultrasonic and infrared. The bot wirelessly transmits the data to a custom-built dashboard that displays a comprehensive friction profile of the surface. The data is then used to generate a safety rating (using a correlation study on friction and accident rates) for road safety assessment."
    },
  
    2: {
      title: "JoBOT",
      members: "Ammar Alam Malik, Khushal Kapoor, Bhaavin Jogeshwar",
      info: "JoBOT has the physical appearance like that of human hind limbs and has the ability of biomechanic plantigrade-bipedalism (i.e. the ability to walk on heels and metatarsals in an upright position). This bot was designed with 10 degrees of freedom and programmed to achieve simple leg movements and stunts. It involves the concepts of embedded systems to control the actions of the robot interfaced with Arduino communicating serially.  The robot is made as compact as possible which makes the robot light-weight making it more efficient. The journey of making JoBOT was very challenging. It required us to tackle the equilibrium complications with various combinations of servo alignment which was quite intense. Through the process we developed our skills in all three domains, mechanical, electronics and coding. "
    },
  
    3: {
      title: "Technofarm",
      members: "Raloue Kapoor, Arnav Agrawal, Ishan Trivedi, Niket Jain",
      info: "Technofarm is a project to help the farmers to in the farm field and analyse their crop quality. The bot is equipped with a camera to capture the image of leaves. The images are processed using convolutional neural networks to predict the quality of the crops with a test accuracy of 94.20%. The Arduino controlled bot is autonomous and obstacle avoiding. Two ultrasonic sensors are used for avoiding the obstacle in front of it. A servo motor is attached to the bot for various applications like sowing the seeds etc."
    },
  
    4: {
      title: "Smart Energy Meter",
      members: "Titiksha Wagh, Parth Sirohi, Nihaarika Agarwal",
      info: "We find out the electric power consumption of our household only at the end of each month, when we pay our electricity bills. By that time it's too late to do anything about the power wastage, and the cycle repeats every month. With an aim of conservation energy, the smart energy meter is an IOT project that would keep you notified about your daily electrical power consumption. The IOT device had a mobile as well as a web based interface. An app developed using the MIT app inventor would send an alert notification to the user if the power consumption of the household exceeds beyond the predefined threshold. The web app was made on Node-Red and displayed a realtime dashboard. The MQTT protocol was studied and implemented to establish communication."
    },
  
    5: {
      title: "Cerebro",
      members: "Gagan, Grissel, Rushil, Darren",
      info: "Cerebro is a mind controlled wheelchair prototype that can be used to help the paralysed cope with the unanticipated disability. The idea of a brainwave controlled wheelchair is inspired from the work of Toyota Scientist and Research Lab RIKEN. Our version of the brainwave controlled wheelchair uses a MPU6050, a 6-Axis gyro + accelerometer, to determine the direction of movement and uses brainwaves for to control the speed of the wheelchair. Unlike other brain actuated applications, we used a MPU 6050 instead of brainwaves to control the direction of movement as it reduces the number of sensors required for brainwave measurement considerably, thereby reducing the overall cost. We used a Biofeedback headset to measure the brainwaves, using Electroencephalography (EEG). These are forehead bands that measures the brain activity. Using Pantech Solutions developed EEG headset we measured and monitored the Alpha waves, frequency ranging from 7 Hz to 13 Hz, and mapped them to the speed of the wheelchair."
    },
  
    6: {
      title: "Project Cardi-AI",
      members: "Pavan Kalyan, Reuben Nellisary, Aditya, Ahaanagan, Grissel, Rushil, Darren",
      info: "An Android app connected to a mic, with a stethoscope attached to it, which would record heartbeat audio and send it to an Ml server which would classify if the heartbeat has any irregularities. MATLAB code is used to classify the heartbeat audio waves. These results would be returned to the Android app. This project would help diagnosis of any heart-related diseases using Artificial Intelligence."
    },
  
    7: {
      title: "Ball and Plate",
      members: "Ryan Thomas",
      info: "This model involves a ball being balanced on a horizontal plate that has 2 degrees of freedom (DOF). The plate movement is such that the ball comes back to the original position at the center of the plate. To make this possible, the system uses a PID controlled algorithm on two axes that control the angle of servos. An overhead camera gives the position of the ball. This model is useful in testing new control algorithms, robotic balancing equipment and many others."
    },
  
    8: {
      title: "Maze solver",
      members: "Sumaja Sastry, Darsh Modi, Rajeev ",
      info: "A LiPo battery powered moving bot that uses five IR sensors at the head of the bot to detect lines on a plane surface. Lines are detected in binary numbers. Supported by Arduino Micro-controller (UNO), the “Left Hand Rule” algorithm is followed to reach the end point or find a way out of the maze. The chassis is fitted with two rear wheels, both run by two individually controlled DC motors and a castor wheel at the front. The turns in the path of motion are directed by one wheel running faster than the other one."
    },
     
    9: {
      title: "  Robotic Arm",
      members: "Mohit Jain, Shubham Agarwal, Kushal Kapoor, Ammar Alam Malik ",
      info: "A Bluetooth controlled, industry centric robotic arm having 7 Degree of Freedom (DOF) made of aluminium for weight reduction and with maximum torque of 29Nm. The base has 2DOF with 360-degree rotation, the elbow has 1DOF and rest at the end. Forward and backward kinematics were used to record the processes it performs and then automate the same. The end effector of the arm could be changed as per the requirement. It takes input of a position in x, y and z-axis then automatically reaches to that point calculating DH parameters and inverse kinematics using MATLAB. "
    },

  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    fillOut(id);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("members").innerHTML = modalInfo[id].members;
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  