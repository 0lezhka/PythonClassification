import json
import os
from os.path import isfile, join

from classification_project.ApplicationConstants import ApplicationConstants


class ClassificationMethodReader:
    def read_all_available_methods(self):
        result = []
        method_dir = ApplicationConstants.AVAILABLE_CLASSIFICATION_METHODS_FOLDER_PATH.value
        methods = [f for f in os.listdir(method_dir) if isfile(join(method_dir, f))]

        for method_file_name in methods:
            with open(method_dir + os.path.sep + method_file_name, 'r') as method:
                result.append(json.load(method))

        return result
