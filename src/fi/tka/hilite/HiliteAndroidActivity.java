package fi.tka.hilite;

import org.apache.cordova.*;
import android.os.Bundle;

public class HiliteAndroidActivity extends DroidGap {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}