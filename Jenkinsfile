pipeline {
  agent {
    docker {
      image 'node:20'
    }
  }
  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/shaikahmadnawaz/jenkins-nodejs.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Docker Build') {
      steps {
        sh 'docker build -t jenkins-nodejs .'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker stop jenkins-nodejs || true'
        sh 'docker rm jenkins-nodejs || true'
        sh 'docker run -d -p 5000:5000 --name jenkins-nodejs jenkins-nodejs'
      }
    }
  }
}
