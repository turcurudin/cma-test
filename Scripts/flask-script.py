#!C:\Users\David\Desktop\library_test\project\Scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'Flask==1.1.1','console_scripts','flask'
__requires__ = 'Flask==1.1.1'
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.exit(
        load_entry_point('Flask==1.1.1', 'console_scripts', 'flask')()
    )
