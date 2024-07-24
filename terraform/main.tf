terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-west-2"
  profile = "techahead"
}


##############################

resource "aws_s3_bucket" "terraform_state" {
  bucket = "terraform-states"
}
