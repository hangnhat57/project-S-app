
node{
     def gitCredentialsId = "5bad9593-8e80-4d49-9561-cae5564223d8";
     def gitRepository = "https://github.com/hangnhat57/project-S-app.git";
     def gitBranch = "master"i	
	stage("Checkout"){
		checkout([$class: 'GitSCM', branches: [[name: "*/"+"${gitBranch}"]],
	        doGenerateSubmoduleConfigurations: false,
        	extensions: [],
	        submoduleCfg: [],
	        userRemoteConfigs: [[credentialsId: "${gitCredentialsId}", url: "${gitRepository}"]]])
	}
	stage("Install dependencies"){
		sh 'npm install'
	}
	stage("Build on dev env"){
		sh 'ng serve'
	}
}
